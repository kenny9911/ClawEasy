import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react';

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

interface AuthContextValue {
  user: GoogleUser | null;
  signIn: () => void;
  signOut: () => void;
  renderButton: (element: HTMLElement) => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  signIn: () => {},
  signOut: () => {},
  renderButton: () => {},
});

export const useAuth = () => useContext(AuthContext);

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const STORAGE_KEY = 'claweasy_user';

let gsiReady = false;
let gsiReadyPromise: Promise<void> | null = null;

function loadGsi(): Promise<void> {
  if (gsiReady) return Promise.resolve();
  if (gsiReadyPromise) return gsiReadyPromise;
  gsiReadyPromise = new Promise((resolve, reject) => {
    if (document.querySelector('script[src*="accounts.google.com/gsi/client"]')) {
      gsiReady = true;
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.onload = () => { gsiReady = true; resolve(); };
    s.onerror = () => reject(new Error('GIS load failed'));
    document.head.appendChild(s);
  });
  return gsiReadyPromise;
}

export function GoogleAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GoogleUser | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });
  const initializedRef = useRef(false);

  const handleCredential = useCallback((credential: string) => {
    try {
      const payload = JSON.parse(atob(credential.split('.')[1]));
      const u: GoogleUser = {
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      };
      setUser(u);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    } catch (err) {
      console.error('Failed to parse Google credential:', err);
    }
  }, []);

  useEffect(() => {
    if (!CLIENT_ID) {
      console.error('VITE_GOOGLE_CLIENT_ID is not set');
      return;
    }
    if (initializedRef.current) return;
    initializedRef.current = true;

    loadGsi().then(() => {
      google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: (response: google.accounts.id.CredentialResponse) => {
          handleCredential(response.credential);
        },
        use_fedcm_for_prompt: false,
      });
    });
  }, [handleCredential]);

  const renderButton = useCallback((element: HTMLElement) => {
    if (!gsiReady) {
      loadGsi().then(() => {
        google.accounts.id.renderButton(element, {
          type: 'standard',
          theme: 'filled_black',
          size: 'large',
          text: 'signin_with',
          shape: 'pill',
        });
      });
    } else {
      google.accounts.id.renderButton(element, {
        type: 'standard',
        theme: 'filled_black',
        size: 'large',
        text: 'signin_with',
        shape: 'pill',
      });
    }
  }, []);

  const signIn = useCallback(() => {
    google.accounts.id.prompt();
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    google.accounts.id.disableAutoSelect();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, renderButton }}>
      {children}
    </AuthContext.Provider>
  );
}
