import { useState } from 'react';
import { CheckIcon } from '../../icons';
import { Button } from '../common/Button';
import { SectionHeader } from '../common/SectionHeader';
import { plans } from '../../data/plans';
import styles from './Pricing.module.css';

export function Pricing() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <SectionHeader
          label="SIMPLE PRICING"
          title="Start free. Scale as you grow."
          subtitle="All plans include a free 14-day trial. No credit card required."
        />

        <div className={styles.toggle}>
          <div className={styles.toggleInner}>
            {(['monthly', 'yearly'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={styles.toggleBtn}
                style={{
                  background:
                    activeTab === tab
                      ? 'rgba(255,107,53,0.15)'
                      : 'transparent',
                  color: activeTab === tab ? '#ff6b35' : '#888',
                }}
              >
                {tab === 'yearly' ? 'Yearly (Save 20%)' : 'Monthly'}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`plan-card ${styles.card}`}
              style={{
                border: plan.popular
                  ? '1px solid rgba(255,107,53,0.4)'
                  : '1px solid rgba(255,255,255,0.06)',
                background: plan.popular
                  ? 'linear-gradient(180deg, rgba(255,107,53,0.06) 0%, rgba(8,9,12,1) 100%)'
                  : 'rgba(255,255,255,0.02)',
              }}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div
                className={styles.planName}
                style={{ color: plan.popular ? '#ff6b35' : '#fff' }}
              >
                {plan.name}
              </div>
              <div className={styles.planDesc}>{plan.desc}</div>
              <div className={styles.priceRow}>
                <span className={styles.price}>
                  {plan.price === 'Custom'
                    ? 'Custom'
                    : activeTab === 'yearly'
                      ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                      : plan.price}
                </span>
                {plan.period && (
                  <span className={styles.period}>{plan.period}</span>
                )}
              </div>
              <Button
                variant={plan.popular ? 'primary' : 'ghost'}
                className={styles.planCta}
                style={
                  plan.popular
                    ? undefined
                    : { background: 'rgba(255,255,255,0.06)', color: '#ccc' }
                }
              >
                {plan.cta}
              </Button>
              <div className={styles.features}>
                {plan.features.map((f, j) => (
                  <div key={j} className={styles.featureRow}>
                    <CheckIcon />
                    <span className={styles.featureText}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
