import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

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

function readStoredUser(): GoogleUser | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as GoogleUser;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function GoogleAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GoogleUser | null>(() => readStoredUser());

  // On mount, check if we're returning from Google OAuth callback
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get('google_user');

    if (userParam) {
      try {
        const googleUser = JSON.parse(decodeURIComponent(userParam)) as GoogleUser;
        setUser(googleUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(googleUser));
      } catch (err) {
        console.error('Failed to parse user from OAuth callback:', err);
      }
      // Clean the URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const signIn = useCallback(() => {
    if (!CLIENT_ID) {
      console.error('VITE_GOOGLE_CLIENT_ID is not set');
      return;
    }

    const redirectUri = `${window.location.origin}/api/auth/google/callback`;
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'openid email profile',
      prompt: 'select_account',
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
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
