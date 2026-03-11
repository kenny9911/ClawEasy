import { channels } from '../../data/channels';
import styles from './ChannelMarquee.module.css';

export function ChannelMarquee() {
  const tripled = [...channels, ...channels, ...channels];

  return (
    <section className={styles.section}>
      <div className={styles.label}>CONNECT EVERYWHERE</div>
      <div className={styles.track}>
        <div className={styles.slider}>
          {tripled.map((ch, i) => (
            <div
              key={i}
              className={styles.pill}
              style={{
                border: `1px solid ${ch.color}30`,
                background: `${ch.color}08`,
              }}
            >
              <div
                className={styles.pillIcon}
                style={{ background: `${ch.color}25`, color: ch.color }}
              >
                {ch.name[0]}
              </div>
              <span className={styles.pillName}>{ch.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
