import { Button } from '../common/Button';
import { useI18n } from '../../i18n/I18nContext';
import styles from './CallToAction.module.css';

export function CallToAction() {
  const { t } = useI18n();

  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          {t.cta.title1}
          <br />
          <span className={styles.accent}>{t.cta.title2}</span>
        </h2>
        <p className={styles.subtitle}>{t.cta.subtitle}</p>
        <Button
          variant="primary"
          style={{ padding: '16px 40px', fontSize: 17, gap: 10, animation: 'pulse-glow 3s infinite' }}
        >
          {t.cta.button}
        </Button>
        <div className={styles.checks}>
          <span>{t.cta.check1}</span>
          <span>{t.cta.check2}</span>
          <span>{t.cta.check3}</span>
        </div>
      </div>
    </section>
  );
}
