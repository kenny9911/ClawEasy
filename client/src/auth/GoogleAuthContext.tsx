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
  const tokenClientRef = useRef<google.accounts.oauth2.TokenClient | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!CLIENT_ID) {
      console.error('VITE_GOOGLE_CLIENT_ID is not set');
      return;
    }
    if (initializedRef.current) return;
    initializedRef.current = true;

    loadGsi().then(() => {
      tokenClientRef.current = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: 'openid profile email',
        callback: async (response) => {
          if (response.error) {
            console.error('Google OAuth error:', response.error);
            return;
          }
          try {
            const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: `Bearer ${response.access_token}` },
            });
            if (!res.ok) throw new Error(`UserInfo fetch failed: ${res.status}`);
            const info = await res.json();
            const googleUser: GoogleUser = {
              name: info.name,
              email: info.email,
              picture: info.picture,
            };
            setUser(googleUser);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(googleUser));
          } catch (err) {
            console.error('Google sign-in failed:', err);
          }
        },
      });
    });
  }, []);

  const signIn = useCallback(() => {
    if (!tokenClientRef.current) {
      console.error('Google sign-in not ready yet');
      return;
    }
    tokenClientRef.current.requestAccessToken();
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
