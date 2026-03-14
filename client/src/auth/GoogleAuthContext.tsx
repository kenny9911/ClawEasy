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
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  signIn: () => {},
  signOut: () => {},
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
  const hiddenBtnRef = useRef<HTMLDivElement | null>(null);

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

    // Create hidden container for the Google button
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '-9999px';
    container.style.left = '-9999px';
    document.body.appendChild(container);
    hiddenBtnRef.current = container;

    loadGsi().then(() => {
      google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: (response: google.accounts.id.CredentialResponse) => {
          handleCredential(response.credential);
        },
        use_fedcm_for_prompt: false,
      });

      // Render a hidden Google button we can programmatically click
      google.accounts.id.renderButton(container, {
        type: 'standard',
        size: 'large',
      });
    });
  }, [handleCredential]);

  const signIn = useCallback(() => {
    // Click the hidden Google button to trigger the popup
    const googleBtn = hiddenBtnRef.current?.querySelector('[role="button"]') as HTMLElement
      || hiddenBtnRef.current?.querySelector('div[aria-labelledby]') as HTMLElement
      || hiddenBtnRef.current?.querySelector('iframe');

    if (googleBtn) {
      googleBtn.click();
    } else {
      // Fallback: try One Tap prompt
      google.accounts.id.prompt();
    }
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    google.accounts.id.disableAutoSelect();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
