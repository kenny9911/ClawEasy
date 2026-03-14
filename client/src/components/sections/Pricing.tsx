import { useState } from 'react';
import { CheckIcon } from '../../icons';
import { Button } from '../common/Button';
import { SectionHeader } from '../common/SectionHeader';
import { useI18n } from '../../i18n/I18nContext';
import styles from './Pricing.module.css';

const planKeys = ['starter', 'pro', 'max'] as const;
const planPrices = [12, 29, 79];
const planPopular = [false, true, false];

export function Pricing() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <SectionHeader
          label={t.pricing.label}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        <div className={styles.toggle}>
          <div className={styles.toggleInner}>
            {(['monthly', 'yearly'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={styles.toggleBtn}
                style={{
                  background: activeTab === tab ? 'rgba(255,107,53,0.15)' : 'transparent',
                  color: activeTab === tab ? '#ff6b35' : '#888',
                }}
              >
                {tab === 'yearly' ? t.pricing.yearly : t.pricing.monthly}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {planKeys.map((key, i) => {
            const plan = t.pricing[key];
            const popular = planPopular[i];
            const price = planPrices[i];
            const isCustom = price === 0;

            return (
              <div
                key={i}
                className={`plan-card ${styles.card}`}
                style={{
                  border: popular ? '1px solid rgba(255,107,53,0.4)' : '1px solid rgba(255,255,255,0.06)',
                  background: popular ? 'linear-gradient(180deg, rgba(255,107,53,0.06) 0%, rgba(8,9,12,1) 100%)' : 'rgba(255,255,255,0.02)',
                }}
              >
                {popular && <div className={styles.popularBadge}>{t.pricing.mostPopular}</div>}
                <div className={styles.planName} style={{ color: popular ? '#ff6b35' : '#fff' }}>{plan.name}</div>
                <div className={styles.planDesc}>{plan.desc}</div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>
                    {isCustom ? t.pricing.custom : activeTab === 'yearly' ? `$${Math.round(price * 0.8)}` : `$${price}`}
                  </span>
                  {!isCustom && <span className={styles.period}>{t.pricing.perMonth}</span>}
                </div>
                <Button
                  variant={popular ? 'primary' : 'ghost'}
                  className={styles.planCta}
                  style={popular ? undefined : { background: 'rgba(255,255,255,0.06)', color: '#ccc' }}
                >
                  {plan.cta}
                </Button>
                <div className={styles.features}>
                  {plan.features.map((f: string, j: number) => (
                    <div key={j} className={styles.featureRow}>
                      <CheckIcon />
                      <span className={styles.featureText}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
