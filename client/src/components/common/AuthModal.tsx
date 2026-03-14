import { useState, useEffect, type FormEvent } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { XIcon } from '../../icons';
import styles from './AuthModal.module.css';

type AuthView = 'signin' | 'signup';

const GoogleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.0 24.0 0 0 0 0 21.56l7.98-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

export function AuthModal() {
  const { authModalOpen, closeAuthModal, signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const [view, setView] = useState<AuthView>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (authModalOpen) {
      setView('signin');
      setName('');
      setEmail('');
      setPassword('');
      setError('');
      setSubmitting(false);
      setSignUpSuccess(false);
    }
  }, [authModalOpen]);

  // Close on Escape
  useEffect(() => {
    if (!authModalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAuthModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [authModalOpen, closeAuthModal]);

  if (!authModalOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    if (view === 'signin') {
      const result = await signInWithEmail(email, password);
      if (result.error) {
        setError(result.error);
        setSubmitting(false);
      }
    } else {
      if (!name.trim()) {
        setError('Name is required');
        setSubmitting(false);
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        setSubmitting(false);
        return;
      }
      const result = await signUpWithEmail(email, password, name.trim());
      if (result.error) {
        setError(result.error);
        setSubmitting(false);
      } else {
        setSignUpSuccess(true);
        setSubmitting(false);
      }
    }
  };

  const switchView = (newView: AuthView) => {
    setView(newView);
    setError('');
    setSignUpSuccess(false);
  };

  return (
    <div className={styles.overlay} onClick={closeAuthModal}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={closeAuthModal} aria-label="Close">
          <XIcon />
        </button>

        <h2 className={styles.title}>
          {view === 'signin' ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className={styles.subtitle}>
          {view === 'signin'
            ? 'Sign in to your ClawEasy account'
            : 'Get started with ClawEasy'}
        </p>

        <button className={styles.googleBtn} onClick={signInWithGoogle} type="button">
          <GoogleLogo />
          Continue with Google
        </button>

        <div className={styles.divider}>
          <span>or</span>
        </div>

        {signUpSuccess ? (
          <div className={styles.successMsg}>
            Check your email to confirm your account, then sign in.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            {view === 'signup' && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                autoComplete="name"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              autoComplete="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              autoComplete={view === 'signin' ? 'current-password' : 'new-password'}
              minLength={6}
              required
            />
            {error && <div className={styles.error}>{error}</div>}
            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              {submitting
                ? (view === 'signin' ? 'Signing in...' : 'Creating account...')
                : (view === 'signin' ? 'Sign In' : 'Create Account')}
            </button>
          </form>
        )}

        <p className={styles.switchText}>
          {view === 'signin' ? (
            <>
              Don&apos;t have an account?{' '}
              <button type="button" className={styles.switchBtn} onClick={() => switchView('signup')}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button type="button" className={styles.switchBtn} onClick={() => switchView('signin')}>
                Sign In
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
