import { ZapIcon, BotIcon, LayersIcon, ShieldIcon, GlobeIcon, TerminalIcon } from '../../icons';
import { SectionHeader } from '../common/SectionHeader';
import { useI18n } from '../../i18n/I18nContext';
import styles from './FeaturesGrid.module.css';

const icons = [<ZapIcon />, <BotIcon />, <LayersIcon />, <ShieldIcon />, <GlobeIcon />, <TerminalIcon />];
const featureKeys = ['deploy', 'fleet', 'routing', 'security', 'global', 'hotReload'] as const;

export function FeaturesGrid() {
  const { t } = useI18n();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label={t.features.label}
          title={t.features.title}
          subtitle={t.features.subtitle}
        />

        <div className={styles.grid}>
          {featureKeys.map((key, i) => (
            <div key={i} className={`hover-card ${styles.card}`}>
              <div className={styles.iconWrap}>{icons[i]}</div>
              <h3 className={styles.cardTitle}>{t.features[key].title}</h3>
              <p className={styles.cardDesc}>{t.features[key].desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
