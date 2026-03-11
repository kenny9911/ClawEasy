import { useState, useEffect } from 'react';
import type { TerminalLine } from '../../types';
import styles from './Terminal.module.css';

interface TerminalProps {
  lines: TerminalLine[];
  title: string;
  variant?: 'default' | 'branded';
  successMessage?: string;
}

export function Terminal({ lines, title, variant = 'default', successMessage }: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);

  useEffect(() => {
    setVisibleLines([]);
    lines.forEach((line) => {
      setTimeout(
        () => setVisibleLines((prev) => [...prev, line]),
        line.delay
      );
    });
  }, [lines]);

  const isBranded = variant === 'branded';
  const allDone = visibleLines.length === lines.length;

  return (
    <div
      className={styles.terminal}
      style={isBranded ? { borderColor: 'rgba(255,107,53,0.3)' } : undefined}
    >
      <div className={styles.header}>
        <div className={styles.dots}>
          {isBranded ? (
            <>
              <div className={styles.dot} style={{ background: '#ff6b35' }} />
              <div className={styles.dot} style={{ background: '#ff6b35', opacity: 0.6 }} />
              <div className={styles.dot} style={{ background: '#ff6b35', opacity: 0.3 }} />
            </>
          ) : (
            <>
              <div className={styles.dot} style={{ background: '#ff5f57' }} />
              <div className={styles.dot} style={{ background: '#febc2e' }} />
              <div className={styles.dot} style={{ background: '#28c840' }} />
            </>
          )}
        </div>
        <span
          className={styles.titleText}
          style={isBranded ? { color: '#ff6b35' } : undefined}
        >
          {title}
        </span>
      </div>
      <div className={styles.body}>
        {visibleLines.map((l, i) => (
          <div
            key={i}
            className={styles.line}
            style={{
              color: l.isError ? '#ef4444' : l.isSuccess ? '#22c55e' : isBranded ? '#e2e8f0' : '#a0aec0',
              fontWeight: l.isSuccess ? 600 : 400,
              animation: 'fadeSlideIn 0.3s forwards',
            }}
          >
            {l.text}
          </div>
        ))}
        {!isBranded && allDone && visibleLines.length > 0 && (
          <div className={styles.statusBad}>
            ✗ 3 hours later... still not running
          </div>
        )}
        {isBranded && allDone && successMessage && (
          <div className={styles.statusGood}>{successMessage}</div>
        )}
      </div>
    </div>
  );
}
