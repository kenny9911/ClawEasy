import { useState } from 'react';
import { CheckIcon } from '../../icons';
import { Button } from '../common/Button';
import { SectionHeader } from '../common/SectionHeader';
import { templates } from '../../data/templates';
import { channels } from '../../data/channels';
import { models } from '../../data/models';
import styles from './DeployWizard.module.css';

const stepLabels = ['Template', 'Channels', 'Model'];

export function DeployWizard() {
  const [wizardStep, setWizardStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [selectedChannels, setSelectedChannels] = useState<number[]>([]);
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  const toggleChannel = (i: number) => {
    setSelectedChannels((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <section className={styles.section} id="templates">
      <div className={styles.container}>
        <SectionHeader
          label="3-STEP DEPLOY"
          title="Template → Channel → Model → Live"
          subtitle="Pick what your agent does, where it lives, and which brain powers it. That's it."
        />

        <div className={styles.wizard}>
          {/* Step indicators */}
          <div className={styles.steps}>
            {stepLabels.map((label, i) => (
              <div key={i} className={styles.stepRow}>
                <div
                  onClick={() => setWizardStep(i)}
                  className={styles.stepDot}
                  style={{
                    background:
                      wizardStep === i
                        ? 'linear-gradient(135deg, #ff6b35, #e8432f)'
                        : wizardStep > i
                          ? 'rgba(34,197,94,0.2)'
                          : 'rgba(255,255,255,0.05)',
                    border:
                      wizardStep > i
                        ? '1px solid rgba(34,197,94,0.4)'
                        : wizardStep === i
                          ? 'none'
                          : '1px solid rgba(255,255,255,0.1)',
                    color: wizardStep >= i ? '#fff' : '#666',
                  }}
                >
                  {wizardStep > i ? <CheckIcon /> : i + 1}
                </div>
                <span
                  className={styles.stepLabel}
                  style={{
                    color: wizardStep === i ? '#fff' : '#666',
                    fontWeight: wizardStep === i ? 600 : 400,
                  }}
                >
                  {label}
                </span>
                {i < 2 && (
                  <div
                    className={styles.stepLine}
                    style={{
                      background:
                        wizardStep > i
                          ? 'rgba(34,197,94,0.4)'
                          : 'rgba(255,255,255,0.1)',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 0: Templates */}
          {wizardStep === 0 && (
            <div className={styles.templateGrid}>
              {templates.slice(0, 6).map((t, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedTemplate(i)}
                  className={styles.templateCard}
                  style={{
                    background:
                      selectedTemplate === i
                        ? 'rgba(255,107,53,0.1)'
                        : 'rgba(255,255,255,0.02)',
                    border:
                      selectedTemplate === i
                        ? '1px solid rgba(255,107,53,0.5)'
                        : '1px solid rgba(255,255,255,0.06)',
                    transform: selectedTemplate === i ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <div className={styles.templateIcon}>{t.icon}</div>
                  <div className={styles.templateName}>{t.name}</div>
                  <div className={styles.templateDesc}>{t.desc}</div>
                  <div className={styles.templateBadge}>{t.category}</div>
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Channels */}
          {wizardStep === 1 && (
            <div className={styles.channelGrid}>
              {channels.map((ch, i) => {
                const selected = selectedChannels.includes(i);
                const r = parseInt(ch.color.slice(1, 3), 16);
                const g = parseInt(ch.color.slice(3, 5), 16);
                const b = parseInt(ch.color.slice(5, 7), 16);
                return (
                  <div
                    key={i}
                    onClick={() => toggleChannel(i)}
                    className={styles.channelCard}
                    style={{
                      background: selected
                        ? `rgba(${r},${g},${b},0.1)`
                        : 'rgba(255,255,255,0.02)',
                      border: selected
                        ? `1px solid ${ch.color}55`
                        : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      className={styles.channelIcon}
                      style={{ background: `${ch.color}20`, color: ch.color }}
                    >
                      {ch.name[0]}
                    </div>
                    <div
                      className={styles.channelName}
                      style={{ color: selected ? '#fff' : '#aaa' }}
                    >
                      {ch.name}
                    </div>
                    {selected && (
                      <div className={styles.channelConnected}>● Connected</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Step 2: Model */}
          {wizardStep === 2 && (
            <div className={styles.modelGrid}>
              {models.map((m, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedModel(i)}
                  className={styles.modelCard}
                  style={{
                    background:
                      selectedModel === i
                        ? 'rgba(255,107,53,0.08)'
                        : 'rgba(255,255,255,0.02)',
                    border:
                      selectedModel === i
                        ? '1px solid rgba(255,107,53,0.4)'
                        : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className={styles.modelHeader}>
                    <div
                      className={styles.modelDot}
                      style={{ background: m.color }}
                    />
                    <span className={styles.modelName}>{m.name}</span>
                  </div>
                  <div className={styles.modelProvider}>{m.provider}</div>
                  {m.badge && (
                    <div
                      className={styles.modelBadge}
                      style={{
                        background:
                          m.badge === 'Recommended'
                            ? 'rgba(34,197,94,0.15)'
                            : 'rgba(255,255,255,0.05)',
                        color:
                          m.badge === 'Recommended' ? '#22c55e' : '#aaa',
                      }}
                    >
                      {m.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Navigation */}
          <div className={styles.nav}>
            <Button
              variant="ghost"
              onClick={() => wizardStep > 0 && setWizardStep(wizardStep - 1)}
              style={{
                opacity: wizardStep === 0 ? 0.3 : 1,
                pointerEvents: wizardStep === 0 ? 'none' : 'auto',
              }}
            >
              ← Back
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                wizardStep < 2 ? setWizardStep(wizardStep + 1) : undefined
              }
            >
              {wizardStep === 2 ? '🦞 Deploy Agent' : 'Continue →'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
