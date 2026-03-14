import { Terminal } from '../common/Terminal';
import { SectionHeader } from '../common/SectionHeader';
import { useI18n } from '../../i18n/I18nContext';
import type { TerminalLine } from '../../types';
import styles from './ProblemSolution.module.css';

export function ProblemSolution() {
  const { t } = useI18n();

  const problemLines: TerminalLine[] = [
    { text: t.problem.line1, delay: 0 },
    { text: t.problem.err1, delay: 800, isError: true },
    { text: t.problem.line2, delay: 1600 },
    { text: t.problem.err2, delay: 2400, isError: true },
    { text: t.problem.line3, delay: 3200 },
    { text: t.problem.err3, delay: 4000, isError: true },
  ];

  const solutionLines: TerminalLine[] = [
    { text: t.problem.sol1, delay: 400 },
    { text: t.problem.sol2, delay: 1000 },
    { text: t.problem.sol3, delay: 1600 },
    { text: t.problem.sol4, delay: 2200 },
    { text: t.problem.sol5, delay: 2800, isSuccess: true },
  ];

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <SectionHeader
          label={t.problem.label}
          title={
            <>
              {t.problem.title1}
              <br />
              <span style={{ color: '#666' }}>{t.problem.title2}</span>
            </>
          }
          subtitle={t.problem.subtitle}
        />

        <div className={styles.comparison}>
          <Terminal lines={problemLines} title={t.problem.terminalSelf} statusBadText={t.problem.statusBad} />
          <div className={styles.arrow}>
            <div className={styles.arrowCircle}>→</div>
          </div>
          <Terminal
            lines={solutionLines}
            title={t.problem.terminalDeploy}
            variant="branded"
            successMessage={t.problem.agentUrl}
          />
        </div>
      </div>
    </section>
  );
}
