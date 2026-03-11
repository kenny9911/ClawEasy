import { ZapIcon, BotIcon, LayersIcon, ShieldIcon, GlobeIcon, TerminalIcon } from '../../icons';
import { SectionHeader } from '../common/SectionHeader';
import styles from './FeaturesGrid.module.css';

const features = [
  { icon: <ZapIcon />, title: '60-Second Deploy', desc: 'From sign-up to a running agent in under a minute. No Docker, no SSH, no config files. Just choose and deploy.' },
  { icon: <BotIcon />, title: 'Multi-Agent Fleet', desc: 'Run multiple agents across different channels and use cases. Each isolated, each monitored, all from one dashboard.' },
  { icon: <LayersIcon />, title: 'Smart Model Routing', desc: 'Route simple queries to fast/cheap models and complex ones to powerful models. Optimize cost automatically.' },
  { icon: <ShieldIcon />, title: 'Enterprise Security', desc: 'gVisor container isolation, encrypted credentials, SSO/SAML, audit logs, and data residency options.' },
  { icon: <GlobeIcon />, title: 'Global + China', desc: 'Dual-region architecture supporting both global and Chinese LLM providers, messaging channels, and payment methods.' },
  { icon: <TerminalIcon />, title: 'Hot Reload Config', desc: 'Change models, channels, skills, and rules instantly — no restart needed. Natural language rules engine included.' },
];

export function FeaturesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="CONTROL PLANE"
          title={<>Everything you need to run<br />AI agents at scale</>}
          subtitle="One dashboard to deploy, configure, monitor, and scale your entire agent fleet."
        />

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={`hover-card ${styles.card}`}>
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
