import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { ClawIcon, ArrowIcon, MenuIcon, XIcon } from '../../icons';
import { Button } from '../common/Button';
import styles from './Navbar.module.css';

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = ['Features', 'Templates', 'Pricing', 'Docs'];

export function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, openAuthModal, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleGetStarted = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const userMenu = user ? (
    <div ref={menuRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          borderRadius: '50%',
          overflow: 'hidden',
          width: 36,
          height: 36,
        }}
      >
        {user.picture ? (
          <img
            src={user.picture}
            alt={user.name}
            width={36}
            height={36}
            style={{ borderRadius: '50%', display: 'block' }}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            aria-hidden="true"
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              background: '#ff6b35',
              color: '#08090c',
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {user.name.slice(0, 1).toUpperCase()}
          </div>
        )}
      </button>
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 44,
            right: 0,
            background: '#1a1b1e',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            padding: '12px 16px',
            minWidth: 180,
            zIndex: 100,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>
            {user.name}
          </div>
          <div style={{ fontSize: 12, color: '#888', marginBottom: 12 }}>
            {user.email}
          </div>
          <button
            onClick={() => { signOut(); setMenuOpen(false); }}
            style={{
              width: '100%',
              padding: '8px 0',
              background: 'none',
              border: 'none',
              color: '#ff6b35',
              cursor: 'pointer',
              fontSize: 13,
              textAlign: 'left',
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  ) : null;

  return (
    <nav
      className={styles.nav}
      style={{
        backdropFilter: scrolled || mobileOpen ? 'blur(20px)' : 'none',
        background: scrolled || mobileOpen ? 'rgba(8,9,12,0.95)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.05)'
          : '1px solid transparent',
      }}
    >
      <div className={styles.inner}>
        <div className={styles.logo}>
          <ClawIcon />
          <span className={styles.logoText}>
            Claw<span className={styles.logoAccent}>Easy</span>
          </span>
        </div>
        <div className={styles.links}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nav-link ${styles.link}`}
            >
              {link}
            </a>
          ))}
        </div>
        <div className={styles.actions}>
          {user ? (
            userMenu
          ) : (
            <>
              <Button variant="ghost" onClick={openAuthModal}>
                Sign In
              </Button>
              <Button variant="primary" onClick={handleGetStarted}>
                Get Started <ArrowIcon />
              </Button>
            </>
          )}
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className={styles.mobileActions}>
            {user ? (
              userMenu
            ) : (
              <>
                <Button variant="ghost" onClick={() => { openAuthModal(); setMobileOpen(false); }} style={{ width: '100%', justifyContent: 'center' }}>
                  Sign In
                </Button>
                <Button variant="primary" onClick={handleGetStarted} style={{ width: '100%', justifyContent: 'center' }}>
                  Get Started <ArrowIcon />
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
