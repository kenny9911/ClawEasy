import { StarIcon } from '../../icons';
import { SectionHeader } from '../common/SectionHeader';
import { useI18n } from '../../i18n/I18nContext';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label={t.testimonials.label}
          title={t.testimonials.title}
        />

        <div className={styles.grid}>
          {t.testimonials.items.map((item, i) => (
            <div key={i} className={`hover-card ${styles.card}`}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className={styles.quote}>"{item.quote}"</p>
              <div>
                <div className={styles.author}>{item.author}</div>
                <div className={styles.role}>{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
