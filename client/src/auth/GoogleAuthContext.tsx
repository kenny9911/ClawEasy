import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

interface AuthContextValue {
  user: GoogleUser | null;
  ready: boolean;
  renderSignInButton: (container: HTMLElement, width?: number) => void;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  ready: false,
  renderSignInButton: () => {},
  signIn: () => {},
  signOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const STORAGE_KEY = 'claweasy_user';

let gsiReadyPromise: Promise<void> | null = null;

interface VerifyGoogleAuthResponse {
  user: GoogleUser;
}

function hasGsiLoaded() {
  return typeof google !== 'undefined' && Boolean(google.accounts?.id);
}

function loadGsi(): Promise<void> {
  if (hasGsiLoaded()) return Promise.resolve();
  if (gsiReadyPromise) return gsiReadyPromise;

  gsiReadyPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://accounts.google.com/gsi/client"]');
    const handleReady = () => {
      if (!hasGsiLoaded()) {
        reject(new Error('Google Identity Services did not finish loading'));
        return;
      }
      resolve();
    };

    if (hasGsiLoaded()) {
      handleReady();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener('load', handleReady, { once: true });
      existingScript.addEventListener('error', () => reject(new Error('GIS load failed')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = handleReady;
    script.onerror = () => reject(new Error('GIS load failed'));
    document.head.appendChild(script);
  });

  return gsiReadyPromise;
}

function readStoredUser() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as GoogleUser;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

async function verifyGoogleCredential(credential: string): Promise<GoogleUser> {
  const response = await fetch('/api/auth/google', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ credential }),
  });

  if (!response.ok) {
    throw new Error(`Google sign-in verification failed: ${response.status}`);
  }

  const data = await response.json() as VerifyGoogleAuthResponse;
  return data.user;
}

export function GoogleAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GoogleUser | null>(() => readStoredUser());
  const [ready, setReady] = useState(false);
  const initPromiseRef = useRef<Promise<void> | null>(null);

  const initializeGoogleAuth = useCallback(() => {
    if (!CLIENT_ID) {
      const error = new Error('VITE_GOOGLE_CLIENT_ID is not set');
      console.error(error.message);
      return Promise.reject(error);
    }

    if (initPromiseRef.current) {
      return initPromiseRef.current;
    }

    initPromiseRef.current = loadGsi()
      .then(() => {
        google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: async ({ credential }) => {
            try {
              const googleUser = await verifyGoogleCredential(credential);
              setUser(googleUser);
              localStorage.setItem(STORAGE_KEY, JSON.stringify(googleUser));
            } catch (err) {
              console.error('Google sign-in failed:', err);
            }
          },
          auto_select: false,
          use_fedcm_for_prompt: false,
        });

        setReady(true);
      })
      .catch((err) => {
        initPromiseRef.current = null;
        throw err;
      });

    return initPromiseRef.current;
  }, []);

  useEffect(() => {
    let cancelled = false;

    initializeGoogleAuth()
      .then(() => {
        if (cancelled) return;
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Google sign-in failed to initialize:', err);
      });

    return () => {
      cancelled = true;
    };
  }, [initializeGoogleAuth]);

  const renderSignInButton = useCallback((container: HTMLElement, width?: number) => {
    if (!ready) {
      console.error('Google sign-in not ready yet');
      return;
    }

    container.innerHTML = '';
    google.accounts.id.renderButton(container, {
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
      shape: 'pill',
      logo_alignment: 'left',
      width,
    });
  }, [ready]);

  const signIn = useCallback(async () => {
    try {
      await initializeGoogleAuth();
      google.accounts.id.prompt();
    } catch (err) {
      console.error('Google sign-in failed to start:', err);
    }
  }, [initializeGoogleAuth]);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    if (hasGsiLoaded()) {
      google.accounts.id.disableAutoSelect();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, ready, renderSignInButton, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
