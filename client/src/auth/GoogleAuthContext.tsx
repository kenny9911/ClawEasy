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

export function GoogleAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GoogleUser | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });
  const tokenClientRef = useRef<google.accounts.oauth2.TokenClient | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => {
      tokenClientRef.current = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: 'openid profile email',
        callback: async (response) => {
          if (response.error) return;
          // Fetch user info with the access token
          const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${response.access_token}` },
          });
          const info = await res.json();
          const googleUser: GoogleUser = {
            name: info.name,
            email: info.email,
            picture: info.picture,
          };
          setUser(googleUser);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(googleUser));
        },
      });
    };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const signIn = useCallback(() => {
    tokenClientRef.current?.requestAccessToken();
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
