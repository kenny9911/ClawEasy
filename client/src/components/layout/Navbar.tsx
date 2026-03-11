import { useState } from 'react';
import { ClawIcon, ArrowIcon, MenuIcon, XIcon } from '../../icons';
import { Button } from '../common/Button';
import styles from './Navbar.module.css';

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = ['Features', 'Templates', 'Pricing', 'Docs'];

export function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <Button variant="ghost">Sign In</Button>
          <Button variant="primary">
            Get Started <ArrowIcon />
          </Button>
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
            <Button variant="ghost" style={{ width: '100%', justifyContent: 'center' }}>
              Sign In
            </Button>
            <Button variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
              Get Started <ArrowIcon />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
