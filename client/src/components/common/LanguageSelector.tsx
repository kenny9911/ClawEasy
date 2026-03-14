import { useState, useRef, useEffect } from 'react';
import { useI18n, localeLabels, type Locale } from '../../i18n/I18nContext';
import styles from './LanguageSelector.module.css';

export function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {localeLabels[locale]}
      </button>
      {open && (
        <div className={styles.dropdown}>
          {(Object.keys(localeLabels) as Locale[]).map((loc) => (
            <button
              key={loc}
              className={`${styles.option} ${loc === locale ? styles.active : ''}`}
              onClick={() => { setLocale(loc); setOpen(false); }}
            >
              {localeLabels[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
