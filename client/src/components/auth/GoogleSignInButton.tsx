import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../auth/GoogleAuthContext';
import styles from './GoogleSignInButton.module.css';

interface GoogleSignInButtonProps {
  fullWidth?: boolean;
}

export function GoogleSignInButton({ fullWidth = false }: GoogleSignInButtonProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const { ready, renderSignInButton, signIn } = useAuth();
  const [buttonMounted, setButtonMounted] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const syncMountedState = () => {
      setButtonMounted(host.childElementCount > 0);
    };

    syncMountedState();

    const observer = new MutationObserver(syncMountedState);
    observer.observe(host, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!ready || !host) return;

    const render = () => {
      const width = fullWidth ? Math.round(host.getBoundingClientRect().width) : 220;
      renderSignInButton(host, width);
    };

    render();

    if (!fullWidth || typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(() => render());
    observer.observe(host);
    return () => observer.disconnect();
  }, [fullWidth, ready, renderSignInButton]);

  return (
    <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ''}`}>
      {!buttonMounted && (
        <button type="button" className={styles.fallback} onClick={signIn}>
          Sign In
        </button>
      )}
      <div ref={hostRef} className={styles.host} aria-label="Sign in with Google" />
    </div>
  );
}
