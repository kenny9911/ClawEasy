import { PlayIcon } from '../../icons';
import { Button } from '../common/Button';
import { stats } from '../../data/stats';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Powered by OpenClaw — 187K+ GitHub Stars</span>
        </div>

        <h1 className={styles.title}>
          Your OpenClaw,
          <br />
          <span className={styles.titleGradient}>Ready in 60 Seconds</span>
        </h1>

        <p className={styles.subtitle}>
          Choose a template, channel, and model — we handle hosting, updates,
          <br />
          monitoring, security, and maintenance. The managed control plane for teams.
        </p>

        <div className={styles.ctas}>
          <Button variant="primary" style={{ padding: '14px 32px', fontSize: 16, gap: 8 }}>
            <PlayIcon /> Deploy Your Agent
          </Button>
          <Button
            variant="ghost"
            style={{ padding: '14px 32px', fontSize: 16, border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Watch Demo
          </Button>
        </div>

        <div className={styles.statsBar}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
