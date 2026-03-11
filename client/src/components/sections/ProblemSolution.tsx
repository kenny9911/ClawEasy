import { Terminal } from '../common/Terminal';
import { SectionHeader } from '../common/SectionHeader';
import type { TerminalLine } from '../../types';
import styles from './ProblemSolution.module.css';

const problemLines: TerminalLine[] = [
  { text: '$ docker compose up openclaw', delay: 0 },
  { text: 'ERROR: port 5432 already in use', delay: 800, isError: true },
  { text: '$ pip install -r requirements.txt', delay: 1600 },
  { text: 'ERROR: python 3.9 required, found 3.12', delay: 2400, isError: true },
  { text: '$ npm install && npm run build', delay: 3200 },
  { text: 'Build failed. 14 errors.', delay: 4000, isError: true },
];

const solutionLines: TerminalLine[] = [
  { text: '→ Provisioning your agent...', delay: 400 },
  { text: '→ Connecting Telegram channel...', delay: 1000 },
  { text: '→ Loading Claude Sonnet 4...', delay: 1600 },
  { text: '→ Installing skills: sales-prospector, email-manager...', delay: 2200 },
  { text: '✓ Your ClawEasy agent is live!', delay: 2800, isSuccess: true },
];

export function ProblemSolution() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <SectionHeader
          label="THE PROBLEM"
          title={
            <>
              Everyone wants OpenClaw.
              <br />
              <span style={{ color: '#666' }}>Almost no one can set it up.</span>
            </>
          }
          subtitle="Self-hosting requires Docker, SSH, Python environments, port forwarding, SSL certs, and hours of debugging."
        />

        <div className={styles.comparison}>
          <Terminal lines={problemLines} title="terminal — self-hosting" />
          <div className={styles.arrow}>
            <div className={styles.arrowCircle}>→</div>
          </div>
          <Terminal
            lines={solutionLines}
            title="claweasy — deploy"
            variant="branded"
            successMessage="Agent URL: https://claweasy.io/agent/ax7k2m"
          />
        </div>
      </div>
    </section>
  );
}
