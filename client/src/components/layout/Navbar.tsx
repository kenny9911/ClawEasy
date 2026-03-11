import { ClawIcon, ArrowIcon } from '../../icons';
import { Button } from '../common/Button';
import styles from './Navbar.module.css';

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = ['Features', 'Templates', 'Pricing', 'Docs'];

export function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      className={styles.nav}
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        background: scrolled ? 'rgba(8,9,12,0.85)' : 'transparent',
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
      </div>
    </nav>
  );
}
