import { Button } from '../common/Button';
import styles from './CallToAction.module.css';

export function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Ready to deploy your
          <br />
          <span className={styles.accent}>first agent?</span>
        </h2>
        <p className={styles.subtitle}>
          Free 14-day trial. No credit card required. Deploy in 60 seconds.
        </p>
        <Button
          variant="primary"
          style={{
            padding: '16px 40px',
            fontSize: 17,
            gap: 10,
            animation: 'pulse-glow 3s infinite',
          }}
        >
          🦞 Start Building for Free
        </Button>
        <div className={styles.checks}>
          <span>✓ Free 14-day trial</span>
          <span>✓ No credit card</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
