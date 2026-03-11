import { StarIcon } from '../../icons';
import { SectionHeader } from '../common/SectionHeader';
import { templates } from '../../data/templates';
import styles from './TemplateShowcase.module.css';

export function TemplateShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="TEMPLATE MARKETPLACE"
          title="Pre-built agents for every use case"
          subtitle="Start with a curated template, customize it, or build from scratch."
        />

        <div className={styles.grid}>
          {templates.map((t, i) => (
            <div key={i} className={`hover-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{t.icon}</div>
                <span className={styles.cardBadge}>{t.category}</span>
              </div>
              <h3 className={styles.cardTitle}>{t.name}</h3>
              <p className={styles.cardDesc}>{t.desc}</p>
              <div className={styles.cardFooter}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <span className={styles.deploy}>Deploy →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
