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

// Track script loading globally to survive StrictMode double-mount
let gsiScriptLoaded = false;
let gsiScriptLoading = false;

function loadGsiScript(): Promise<void> {
  if (gsiScriptLoaded) return Promise.resolve();
  if (gsiScriptLoading) {
    return new Promise((resolve) => {
      const check = setInterval(() => {
        if (gsiScriptLoaded) { clearInterval(check); resolve(); }
      }, 50);
    });
  }
  gsiScriptLoading = true;
  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="accounts.google.com/gsi/client"]');
    if (existing) {
      gsiScriptLoaded = true;
      gsiScriptLoading = false;
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => { gsiScriptLoaded = true; gsiScriptLoading = false; resolve(); };
    script.onerror = () => { gsiScriptLoading = false; reject(new Error('Failed to load Google Identity Services')); };
    document.head.appendChild(script);
  });
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
      console.error('VITE_GOOGLE_CLIENT_ID is not set!');
      return;
    }
    if (initializedRef.current) return;
    initializedRef.current = true;

    loadGsiScript().then(() => {
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
    }).catch((err) => {
      console.error(err);
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
