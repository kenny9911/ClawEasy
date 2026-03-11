import { ClawIcon } from '../../icons';
import { footerColumns } from '../../data/footer';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <ClawIcon />
              <span className={styles.brandText}>
                Claw<span className={styles.accent}>Easy</span>
              </span>
            </div>
            <p className={styles.desc}>
              The managed OpenClaw control plane for teams and businesses. Deploy
              autonomous AI agents across any channel in 60 seconds.
            </p>
          </div>
          {footerColumns.map((col, i) => (
            <div key={i}>
              <div className={styles.colTitle}>{col.title}</div>
              {col.links.map((link, j) => (
                <div key={j}>
                  <a href="#" className={`nav-link ${styles.colLink}`}>
                    {link}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © 2026 ClawEasy. All rights reserved.
          </span>
          <div className={styles.socials}>
            {['GitHub', 'Discord', 'Twitter'].map((s, i) => (
              <a key={i} href="#" className={`nav-link ${styles.socialLink}`}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
