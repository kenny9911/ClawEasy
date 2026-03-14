import { ClawIcon } from '../../icons';
import { useI18n } from '../../i18n/I18nContext';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useI18n();

  const columns = [t.footer.product, t.footer.developers, t.footer.company, t.footer.legal];

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
            <p className={styles.desc}>{t.footer.desc}</p>
          </div>
          {columns.map((col, i) => (
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
          <span className={styles.copyright}>{t.footer.copyright}</span>
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
