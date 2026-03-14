import { StarIcon } from '../../icons';
import { SectionHeader } from '../common/SectionHeader';
import { useI18n } from '../../i18n/I18nContext';
import styles from './TemplateShowcase.module.css';

const templateKeys = ['salesProspector', 'supportAgent', 'devopsMonitor', 'hrRecruiter', 'contentCreator', 'personalAssistant', 'legalReviewer', 'communityManager', 'dataAnalyst'] as const;
const templateIcons = ['🎯', '🛟', '⚙️', '👥', '✍️', '🦞', '⚖️', '💬', '📊'];

export function TemplateShowcase() {
  const { t } = useI18n();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label={t.templateShowcase.label}
          title={t.templateShowcase.title}
          subtitle={t.templateShowcase.subtitle}
        />

        <div className={styles.grid}>
          {templateKeys.map((key, i) => {
            const tmpl = t.templates[key];
            return (
              <div key={i} className={`hover-card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>{templateIcons[i]}</div>
                  <span className={styles.cardBadge}>{tmpl.category}</span>
                </div>
                <h3 className={styles.cardTitle}>{tmpl.name}</h3>
                <p className={styles.cardDesc}>{tmpl.desc}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                  </div>
                  <span className={styles.deploy}>{t.templateShowcase.deploy}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
