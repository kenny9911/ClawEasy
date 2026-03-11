import { StarIcon } from '../../icons';
import { SectionHeader } from '../common/SectionHeader';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="TRUSTED BY BUILDERS"
          title="Join thousands running autonomous agents"
        />

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`hover-card ${styles.card}`}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div>
                <div className={styles.author}>{t.author}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
