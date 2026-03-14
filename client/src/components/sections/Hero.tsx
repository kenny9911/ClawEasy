import { PlayIcon } from '../../icons';
import { Button } from '../common/Button';
import { useI18n } from '../../i18n/I18nContext';
import styles from './Hero.module.css';

const statValues = ['187K+', '<60s', '50+', '99.9%'] as const;

export function Hero() {
  const { t } = useI18n();
  const statLabels = [t.stats.stars, t.stats.deployTime, t.stats.integrations, t.stats.uptime];

  return (
    <section className={styles.hero}>
      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>{t.hero.badge}</span>
        </div>

        <h1 className={styles.title}>
          {t.hero.titleLine1}
          <br />
          <span className={styles.titleGradient}>{t.hero.titleLine2}</span>
        </h1>

        <p className={styles.subtitle}>{t.hero.subtitle}</p>

        <div className={styles.ctas}>
          <Button variant="primary" style={{ padding: '14px 32px', fontSize: 16, gap: 8 }}>
            <PlayIcon /> {t.hero.deploy}
          </Button>
          <Button
            variant="ghost"
            style={{ padding: '14px 32px', fontSize: 16, border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {t.hero.demo}
          </Button>
        </div>

        <div className={styles.statsBar}>
          {statValues.map((value, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statValue}>{value}</div>
              <div className={styles.statLabel}>{statLabels[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
