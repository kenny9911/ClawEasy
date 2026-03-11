import { useState, useEffect, useRef } from "react";

// ── Noise texture SVG for backgrounds ──
const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

// ── Icons (inline SVGs) ──
const Icons = {
  Claw: () => (
    <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" fill="url(#cg)" />
      <path d="M10 12c0-2 1.5-4 3-4s2 1.5 2 3-1 3-3 3-2-1-2-2zm9 0c0-2-1.5-4-3-4s-2 1.5-2 3 1 3 3 3 2-1 2-2z" fill="#fff" opacity="0.9" />
      <path d="M11 18c0 0 2 4 5 4s5-4 5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <defs><radialGradient id="cg" cx="16" cy="16" r="14"><stop stopColor="#ff6b35" /><stop offset="1" stopColor="#e8432f" /></radialGradient></defs>
    </svg>
  ),
  Terminal: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  ),
  Shield: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
  ),
  Bot: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><line x1="12" y1="7" x2="12" y2="11" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg>
  ),
  Layers: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
  ),
  Arrow: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
  ),
  Star: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
  ),
  X: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
  ),
  ChevDown: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>
  ),
  Play: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
  ),
};

// ── Channel logos (text-based) ──
const channels = [
  { name: "Telegram", color: "#26A5E4" },
  { name: "Discord", color: "#5865F2" },
  { name: "WhatsApp", color: "#25D366" },
  { name: "Slack", color: "#E01E5A" },
  { name: "WeChat", color: "#07C160" },
  { name: "Feishu", color: "#3370FF" },
  { name: "Web Chat", color: "#ff6b35" },
  { name: "Signal", color: "#3A76F0" },
];

const models = [
  { name: "Claude Sonnet", provider: "Anthropic", badge: "Recommended", color: "#D4A574" },
  { name: "GPT-4o", provider: "OpenAI", badge: "", color: "#10a37f" },
  { name: "Gemini Pro", provider: "Google", badge: "", color: "#4285F4" },
  { name: "DeepSeek V3", provider: "DeepSeek", badge: "Budget", color: "#4F46E5" },
  { name: "Qwen Max", provider: "Alibaba", badge: "China", color: "#FF6A00" },
  { name: "Kimi", provider: "Moonshot", badge: "China", color: "#6366F1" },
];

const templates = [
  { name: "Sales Prospector", desc: "Automate outreach, qualify leads, and manage your sales pipeline", icon: "🎯", category: "Business" },
  { name: "Support Agent", desc: "24/7 customer support across all channels with smart escalation", icon: "🛟", category: "Support" },
  { name: "DevOps Monitor", desc: "Monitor deployments, handle alerts, and manage incidents", icon: "⚙️", category: "Engineering" },
  { name: "HR Recruiter", desc: "Screen resumes, schedule interviews, and engage candidates", icon: "👥", category: "HR" },
  { name: "Content Creator", desc: "Generate posts, manage schedules, and analyze engagement", icon: "✍️", category: "Marketing" },
  { name: "Personal Assistant", desc: "Manage calendar, emails, reminders, and daily tasks", icon: "🦞", category: "Personal" },
  { name: "Legal Reviewer", desc: "Analyze contracts, flag risks, and summarize documents", icon: "⚖️", category: "Legal" },
  { name: "Community Manager", desc: "Moderate channels, engage members, and track sentiment", icon: "💬", category: "Community" },
  { name: "Data Analyst", desc: "Query databases, generate reports, and visualize trends", icon: "📊", category: "Analytics" },
];

const plans = [
  {
    name: "Starter",
    price: "$12",
    period: "/mo",
    desc: "For individuals getting started",
    features: ["1 Agent Instance", "2 Channels", "Community Templates", "Basic Analytics", "2 vCPU / 4GB RAM", "40GB SSD Storage"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    desc: "For power users who rely on AI daily",
    features: ["3 Agent Instances", "Unlimited Channels", "All Templates", "Full Analytics", "4 vCPU / 8GB RAM", "80GB SSD + Priority Support"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/mo",
    desc: "For teams that need collaboration",
    features: ["10 Agent Instances", "5 Team Seats + RBAC", "Shared Workspace", "Team Billing + API Access", "8 vCPU / 16GB RAM", "160GB SSD + Priority Support"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations at scale",
    features: ["Unlimited Agents & Seats", "SSO / SAML", "Audit Logs + Compliance", "Data Residency Options", "Dedicated Cluster", "24/7 Dedicated Support"],
    cta: "Contact Sales",
    popular: false,
  },
];

const stats = [
  { value: "187K+", label: "GitHub Stars" },
  { value: "<60s", label: "Deploy Time" },
  { value: "50+", label: "Integrations" },
  { value: "99.9%", label: "Uptime SLA" },
];

// ── Animated counter ──
function AnimatedNumber({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const num = parseInt(target.replace(/[^0-9]/g, ""));
    if (isNaN(num)) { setVal(target); return; }
    let start = 0;
    const step = Math.max(1, Math.floor(num / 40));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setVal(num); clearInterval(timer); }
      else setVal(start);
    }, 30);
    return () => clearInterval(timer);
  }, [visible, target]);

  return <span ref={ref}>{typeof val === "number" ? val.toLocaleString() + suffix : val}</span>;
}

// ── Terminal animation ──
function TerminalBlock() {
  const lines = [
    { text: "$ docker compose up openclaw", delay: 0 },
    { text: "ERROR: port 5432 already in use", delay: 800, isError: true },
    { text: "$ pip install -r requirements.txt", delay: 1600 },
    { text: "ERROR: python 3.9 required, found 3.12", delay: 2400, isError: true },
    { text: "$ npm install && npm run build", delay: 3200 },
    { text: "Build failed. 14 errors.", delay: 4000, isError: true },
  ];
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(prev => [...prev, line]), line.delay);
    });
  }, []);

  return (
    <div style={styles.terminal}>
      <div style={styles.terminalHeader}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ ...styles.termDot, background: "#ff5f57" }} />
          <div style={{ ...styles.termDot, background: "#febc2e" }} />
          <div style={{ ...styles.termDot, background: "#28c840" }} />
        </div>
        <span style={{ fontSize: 11, color: "#666", fontFamily: "monospace" }}>terminal — self-hosting</span>
      </div>
      <div style={styles.terminalBody}>
        {visibleLines.map((l, i) => (
          <div key={i} style={{ color: l.isError ? "#ef4444" : "#a0aec0", fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: 13, lineHeight: 1.8, opacity: 0, animation: "fadeSlideIn 0.3s forwards" }}>
            {l.text}
          </div>
        ))}
        <div style={{ color: "#666", marginTop: 8, fontFamily: "monospace", fontSize: 12 }}>
          ✗ 3 hours later... still not running
        </div>
      </div>
    </div>
  );
}

function EzClawTerminal() {
  const [step, setStep] = useState(0);
  const steps = [
    { text: "→ Provisioning your agent...", delay: 400 },
    { text: "→ Connecting Telegram channel...", delay: 1000 },
    { text: "→ Loading Claude Sonnet 4...", delay: 1600 },
    { text: "→ Installing skills: sales-prospector, email-manager...", delay: 2200 },
    { text: "✓ Your EzClaw agent is live!", delay: 2800, isSuccess: true },
  ];

  useEffect(() => {
    steps.forEach((s, i) => {
      setTimeout(() => setStep(i + 1), s.delay);
    });
  }, []);

  return (
    <div style={{ ...styles.terminal, borderColor: "rgba(255,107,53,0.3)" }}>
      <div style={styles.terminalHeader}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ ...styles.termDot, background: "#ff6b35" }} />
          <div style={{ ...styles.termDot, background: "#ff6b35", opacity: 0.6 }} />
          <div style={{ ...styles.termDot, background: "#ff6b35", opacity: 0.3 }} />
        </div>
        <span style={{ fontSize: 11, color: "#ff6b35", fontFamily: "monospace" }}>ezclaw — deploy</span>
      </div>
      <div style={styles.terminalBody}>
        {steps.slice(0, step).map((s, i) => (
          <div key={i} style={{ color: s.isSuccess ? "#22c55e" : "#e2e8f0", fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: 13, lineHeight: 1.8, opacity: 0, animation: "fadeSlideIn 0.3s forwards", fontWeight: s.isSuccess ? 600 : 400 }}>
            {s.text}
          </div>
        ))}
        {step >= 5 && (
          <div style={{ marginTop: 12, padding: "8px 12px", background: "rgba(34,197,94,0.1)", borderRadius: 6, border: "1px solid rgba(34,197,94,0.2)", color: "#22c55e", fontFamily: "monospace", fontSize: 12 }}>
            Agent URL: https://ezclaw.io/agent/ax7k2m
          </div>
        )}
      </div>
    </div>
  );
}

// ── Wizard Preview ──
function WizardPreview() {
  const [wizardStep, setWizardStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  const stepLabels = ["Template", "Channels", "Model"];

  return (
    <div style={styles.wizardContainer}>
      {/* Step indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32 }}>
        {stepLabels.map((label, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div onClick={() => setWizardStep(i)} style={{
              width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              background: wizardStep === i ? "linear-gradient(135deg, #ff6b35, #e8432f)" : wizardStep > i ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.05)",
              border: wizardStep > i ? "1px solid rgba(34,197,94,0.4)" : wizardStep === i ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: wizardStep >= i ? "#fff" : "#666", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.3s",
            }}>
              {wizardStep > i ? <Icons.Check /> : i + 1}
            </div>
            <span style={{ fontSize: 13, color: wizardStep === i ? "#fff" : "#666", fontWeight: wizardStep === i ? 600 : 400 }}>{label}</span>
            {i < 2 && <div style={{ width: 40, height: 1, background: wizardStep > i ? "rgba(34,197,94,0.4)" : "rgba(255,255,255,0.1)" }} />}
          </div>
        ))}
      </div>

      {/* Step 0: Templates */}
      {wizardStep === 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {templates.slice(0, 6).map((t, i) => (
            <div key={i} onClick={() => setSelectedTemplate(i)} style={{
              padding: "16px 14px", borderRadius: 12, cursor: "pointer", transition: "all 0.2s",
              background: selectedTemplate === i ? "rgba(255,107,53,0.1)" : "rgba(255,255,255,0.02)",
              border: selectedTemplate === i ? "1px solid rgba(255,107,53,0.5)" : "1px solid rgba(255,255,255,0.06)",
              transform: selectedTemplate === i ? "scale(1.02)" : "scale(1)",
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{t.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{t.name}</div>
              <div style={{ fontSize: 11, color: "#888", lineHeight: 1.4 }}>{t.desc}</div>
              <div style={{ marginTop: 8, fontSize: 10, color: "#ff6b35", background: "rgba(255,107,53,0.1)", padding: "2px 8px", borderRadius: 10, display: "inline-block" }}>
                {t.category}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Step 1: Channels */}
      {wizardStep === 1 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {channels.map((ch, i) => {
            const selected = selectedChannels.includes(i);
            return (
              <div key={i} onClick={() => setSelectedChannels(prev => selected ? prev.filter(x => x !== i) : [...prev, i])} style={{
                padding: 16, borderRadius: 12, cursor: "pointer", textAlign: "center", transition: "all 0.2s",
                background: selected ? `rgba(${parseInt(ch.color.slice(1,3),16)},${parseInt(ch.color.slice(3,5),16)},${parseInt(ch.color.slice(5,7),16)},0.1)` : "rgba(255,255,255,0.02)",
                border: selected ? `1px solid ${ch.color}55` : "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", background: `${ch.color}20`, color: ch.color, fontSize: 18, fontWeight: 700 }}>
                  {ch.name[0]}
                </div>
                <div style={{ fontSize: 12, fontWeight: 500, color: selected ? "#fff" : "#aaa" }}>{ch.name}</div>
                {selected && <div style={{ marginTop: 6, fontSize: 10, color: "#22c55e" }}>● Connected</div>}
              </div>
            );
          })}
        </div>
      )}

      {/* Step 2: Model */}
      {wizardStep === 2 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {models.map((m, i) => (
            <div key={i} onClick={() => setSelectedModel(i)} style={{
              padding: 16, borderRadius: 12, cursor: "pointer", transition: "all 0.2s",
              background: selectedModel === i ? "rgba(255,107,53,0.08)" : "rgba(255,255,255,0.02)",
              border: selectedModel === i ? "1px solid rgba(255,107,53,0.4)" : "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: m.color }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{m.name}</span>
              </div>
              <div style={{ fontSize: 11, color: "#888" }}>{m.provider}</div>
              {m.badge && (
                <div style={{ marginTop: 8, fontSize: 10, padding: "2px 8px", borderRadius: 10, display: "inline-block", background: m.badge === "Recommended" ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.05)", color: m.badge === "Recommended" ? "#22c55e" : "#aaa" }}>
                  {m.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
        <button onClick={() => wizardStep > 0 && setWizardStep(wizardStep - 1)} style={{ ...styles.btnGhost, opacity: wizardStep === 0 ? 0.3 : 1, pointerEvents: wizardStep === 0 ? "none" : "auto" }}>
          ← Back
        </button>
        <button onClick={() => wizardStep < 2 ? setWizardStep(wizardStep + 1) : null} style={styles.btnPrimary}>
          {wizardStep === 2 ? "🦞 Deploy Agent" : "Continue →"}
        </button>
      </div>
    </div>
  );
}

// ── Main App ──
export default function EzClawApp() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("yearly");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #08090c; }
        
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,107,53,0.15); }
          50% { box-shadow: 0 0 40px rgba(255,107,53,0.3); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        .hover-card:hover {
          transform: translateY(-4px) !important;
          border-color: rgba(255,107,53,0.3) !important;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,107,53,0.08) !important;
        }
        .hover-scale:hover { transform: scale(1.03) !important; }
        .hover-glow:hover { box-shadow: 0 0 30px rgba(255,107,53,0.2) !important; }
        .nav-link:hover { color: #ff6b35 !important; }
        .btn-primary-hover:hover { transform: translateY(-1px); box-shadow: 0 8px 30px rgba(255,107,53,0.3); }
        .plan-card:hover { border-color: rgba(255,107,53,0.4) !important; }
      `}</style>

      {/* ═══ NAV ═══ */}
      <nav style={{ ...styles.nav, backdropFilter: scrolled ? "blur(20px)" : "none", background: scrolled ? "rgba(8,9,12,0.85)" : "transparent", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent" }}>
        <div style={styles.navInner}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Icons.Claw />
            <span style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Outfit', sans-serif", color: "#fff", letterSpacing: -0.5 }}>
              Ez<span style={{ color: "#ff6b35" }}>Claw</span>
            </span>
          </div>
          <div style={styles.navLinks}>
            {["Features", "Templates", "Pricing", "Docs"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="nav-link" style={styles.navLink}>{link}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button style={styles.btnGhost}>Sign In</button>
            <button className="btn-primary-hover" style={styles.btnPrimary}>
              Get Started <Icons.Arrow />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={styles.hero}>
        {/* Background gradient orbs */}
        <div style={{ position: "absolute", top: -200, left: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -100, right: -300, width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,67,47,0.06) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        
        <div style={styles.heroContent}>
          {/* Badge */}
          <div style={styles.heroBadge}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", animation: "pulse-glow 2s infinite" }} />
            <span>Powered by OpenClaw — 187K+ GitHub Stars</span>
          </div>

          <h1 style={styles.heroTitle}>
            Your OpenClaw,<br />
            <span style={{ background: "linear-gradient(135deg, #ff6b35, #e8432f, #ff8c42)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% 200%", animation: "gradient-shift 4s ease infinite" }}>
              Ready in 60 Seconds
            </span>
          </h1>

          <p style={styles.heroSub}>
            Choose a template, channel, and model — we handle hosting, updates,<br />
            monitoring, security, and maintenance. The managed control plane for teams.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary-hover" style={{ ...styles.btnPrimary, padding: "14px 32px", fontSize: 16, gap: 8 }}>
              <Icons.Play /> Deploy Your Agent
            </button>
            <button style={{ ...styles.btnGhost, padding: "14px 32px", fontSize: 16, border: "1px solid rgba(255,255,255,0.1)" }}>
              Watch Demo
            </button>
          </div>

          {/* Stats bar */}
          <div style={styles.statsBar}>
            {stats.map((s, i) => (
              <div key={i} style={styles.statItem}>
                <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Outfit', sans-serif", color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#888", letterSpacing: 1, textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM / SOLUTION ═══ */}
      <section style={styles.section} id="features">
        <div style={styles.container}>
          <div style={styles.sectionLabel}>THE PROBLEM</div>
          <h2 style={styles.sectionTitle}>Everyone wants OpenClaw.<br /><span style={{ color: "#666" }}>Almost no one can set it up.</span></h2>
          <p style={{ ...styles.sectionSub, marginBottom: 48 }}>
            Self-hosting requires Docker, SSH, Python environments, port forwarding, SSL certs, and hours of debugging.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 24, alignItems: "center", maxWidth: 900, margin: "0 auto" }}>
            <TerminalBlock />
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #ff6b35, #e8432f)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", fontSize: 20 }}>→</div>
            </div>
            <EzClawTerminal />
          </div>
        </div>
      </section>

      {/* ═══ DEPLOY WIZARD ═══ */}
      <section style={{ ...styles.section, background: "linear-gradient(180deg, rgba(255,107,53,0.02) 0%, transparent 100%)" }} id="templates">
        <div style={styles.container}>
          <div style={styles.sectionLabel}>3-STEP DEPLOY</div>
          <h2 style={styles.sectionTitle}>Template → Channel → Model → Live</h2>
          <p style={{ ...styles.sectionSub, marginBottom: 48 }}>
            Pick what your agent does, where it lives, and which brain powers it. That's it.
          </p>
          <WizardPreview />
        </div>
      </section>

      {/* ═══ FEATURES GRID ═══ */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionLabel}>CONTROL PLANE</div>
          <h2 style={styles.sectionTitle}>Everything you need to run<br />AI agents at scale</h2>
          <p style={{ ...styles.sectionSub, marginBottom: 48 }}>
            One dashboard to deploy, configure, monitor, and scale your entire agent fleet.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: <Icons.Zap />, title: "60-Second Deploy", desc: "From sign-up to a running agent in under a minute. No Docker, no SSH, no config files. Just choose and deploy." },
              { icon: <Icons.Bot />, title: "Multi-Agent Fleet", desc: "Run multiple agents across different channels and use cases. Each isolated, each monitored, all from one dashboard." },
              { icon: <Icons.Layers />, title: "Smart Model Routing", desc: "Route simple queries to fast/cheap models and complex ones to powerful models. Optimize cost automatically." },
              { icon: <Icons.Shield />, title: "Enterprise Security", desc: "gVisor container isolation, encrypted credentials, SSO/SAML, audit logs, and data residency options." },
              { icon: <Icons.Globe />, title: "Global + China", desc: "Dual-region architecture supporting both global and Chinese LLM providers, messaging channels, and payment methods." },
              { icon: <Icons.Terminal />, title: "Hot Reload Config", desc: "Change models, channels, skills, and rules instantly — no restart needed. Natural language rules engine included." },
            ].map((f, i) => (
              <div key={i} className="hover-card" style={styles.featureCard}>
                <div style={styles.featureIcon}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 8, fontFamily: "'Outfit', sans-serif" }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHANNEL MARQUEE ═══ */}
      <section style={{ padding: "60px 0", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={styles.sectionLabel}>CONNECT EVERYWHERE</div>
        <div style={{ overflow: "hidden", marginTop: 24 }}>
          <div style={{ display: "flex", gap: 16, animation: "marquee 25s linear infinite", width: "fit-content" }}>
            {[...channels, ...channels, ...channels].map((ch, i) => (
              <div key={i} style={{ padding: "10px 24px", borderRadius: 40, border: `1px solid ${ch.color}30`, background: `${ch.color}08`, display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap" }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: `${ch.color}25`, display: "flex", alignItems: "center", justifyContent: "center", color: ch.color, fontSize: 12, fontWeight: 700 }}>{ch.name[0]}</div>
                <span style={{ fontSize: 13, color: "#ccc", fontWeight: 500 }}>{ch.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEMPLATE SHOWCASE ═══ */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionLabel}>TEMPLATE MARKETPLACE</div>
          <h2 style={styles.sectionTitle}>Pre-built agents for every use case</h2>
          <p style={{ ...styles.sectionSub, marginBottom: 48 }}>
            Start with a curated template, customize it, or build from scratch.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {templates.map((t, i) => (
              <div key={i} className="hover-card" style={{ ...styles.templateCard, animationDelay: `${i * 0.05}s` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ fontSize: 32 }}>{t.icon}</div>
                  <span style={{ fontSize: 10, color: "#ff6b35", background: "rgba(255,107,53,0.1)", padding: "3px 10px", borderRadius: 10, fontWeight: 500 }}>{t.category}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#fff", margin: "12px 0 6px", fontFamily: "'Outfit', sans-serif" }}>{t.name}</h3>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.5, flex: 1 }}>{t.desc}</p>
                <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 2, color: "#ff6b35" }}>
                    {[...Array(5)].map((_, j) => <Icons.Star key={j} />)}
                  </div>
                  <span style={{ fontSize: 11, color: "#666" }}>Deploy →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section style={{ ...styles.section, background: "linear-gradient(180deg, transparent 0%, rgba(255,107,53,0.02) 50%, transparent 100%)" }} id="pricing">
        <div style={styles.container}>
          <div style={styles.sectionLabel}>SIMPLE PRICING</div>
          <h2 style={styles.sectionTitle}>Start free. Scale as you grow.</h2>
          <p style={{ ...styles.sectionSub, marginBottom: 16 }}>
            All plans include a free 14-day trial. No credit card required.
          </p>

          {/* Toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
            <div style={{ display: "flex", background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 3, border: "1px solid rgba(255,255,255,0.06)" }}>
              {["monthly", "yearly"].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 500, transition: "all 0.2s",
                  background: activeTab === tab ? "rgba(255,107,53,0.15)" : "transparent",
                  color: activeTab === tab ? "#ff6b35" : "#888",
                }}>
                  {tab === "yearly" ? "Yearly (Save 20%)" : "Monthly"}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {plans.map((plan, i) => (
              <div key={i} className="plan-card" style={{
                ...styles.planCard,
                border: plan.popular ? "1px solid rgba(255,107,53,0.4)" : "1px solid rgba(255,255,255,0.06)",
                background: plan.popular ? "linear-gradient(180deg, rgba(255,107,53,0.06) 0%, rgba(8,9,12,1) 100%)" : "rgba(255,255,255,0.02)",
                position: "relative",
              }}>
                {plan.popular && (
                  <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", padding: "3px 16px", borderRadius: "0 0 8px 8px", background: "linear-gradient(135deg, #ff6b35, #e8432f)", fontSize: 10, fontWeight: 600, color: "#fff", letterSpacing: 1, textTransform: "uppercase" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize: 14, fontWeight: 600, color: plan.popular ? "#ff6b35" : "#fff", marginBottom: 4, fontFamily: "'Outfit', sans-serif" }}>{plan.name}</div>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 16 }}>{plan.desc}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 20 }}>
                  <span style={{ fontSize: 36, fontWeight: 700, color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
                    {plan.price === "Custom" ? "Custom" : (activeTab === "yearly" && plan.price !== "Custom" ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}` : plan.price)}
                  </span>
                  {plan.period && <span style={{ fontSize: 14, color: "#666" }}>{plan.period}</span>}
                </div>
                <button className="btn-primary-hover" style={{
                  ...styles.btnPrimary, width: "100%", justifyContent: "center", padding: "10px 0", fontSize: 13, marginBottom: 20,
                  background: plan.popular ? "linear-gradient(135deg, #ff6b35, #e8432f)" : "rgba(255,255,255,0.06)",
                  color: plan.popular ? "#fff" : "#ccc",
                }}>
                  {plan.cta}
                </button>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Icons.Check />
                      <span style={{ fontSize: 12, color: "#aaa" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF ═══ */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionLabel}>TRUSTED BY BUILDERS</div>
          <h2 style={styles.sectionTitle}>Join thousands running autonomous agents</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 40 }}>
            {[
              { quote: "EzClaw turned a weekend project into a production system. My sales bot runs 24/7 across Telegram and WhatsApp, closing deals while I sleep.", author: "Sarah K.", role: "Founder, SalesFlow" },
              { quote: "We migrated from self-hosted OpenClaw to EzClaw and saved 20 hours/month on maintenance. The team dashboard is a game-changer.", author: "Marcus T.", role: "CTO, DevScale" },
              { quote: "The China + Global dual-stack is exactly what we needed. One platform for WeChat in China and Slack for our US team.", author: "Wei L.", role: "VP Ops, CrossBridge" },
            ].map((t, i) => (
              <div key={i} className="hover-card" style={styles.testimonialCard}>
                <div style={{ display: "flex", gap: 2, color: "#ff6b35", marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => <Icons.Star key={j} />)}
                </div>
                <p style={{ fontSize: 14, color: "#ccc", lineHeight: 1.7, fontStyle: "italic", marginBottom: 20, flex: 1 }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{t.author}</div>
                  <div style={{ fontSize: 12, color: "#888" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,107,53,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: 44, fontWeight: 700, color: "#fff", fontFamily: "'Outfit', sans-serif", lineHeight: 1.2, marginBottom: 16 }}>
            Ready to deploy your<br />
            <span style={{ color: "#ff6b35" }}>first agent?</span>
          </h2>
          <p style={{ fontSize: 16, color: "#888", marginBottom: 32 }}>
            Free 14-day trial. No credit card required. Deploy in 60 seconds.
          </p>
          <button className="btn-primary-hover" style={{ ...styles.btnPrimary, padding: "16px 40px", fontSize: 17, gap: 10, animation: "pulse-glow 3s infinite" }}>
            🦞 Start Building for Free
          </button>
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 24, color: "#666", fontSize: 13 }}>
            <span>✓ Free 14-day trial</span>
            <span>✓ No credit card</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <Icons.Claw />
                <span style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Outfit', sans-serif", color: "#fff" }}>
                  Ez<span style={{ color: "#ff6b35" }}>Claw</span>
                </span>
              </div>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, maxWidth: 280 }}>
                The managed OpenClaw control plane for teams and businesses. Deploy autonomous AI agents across any channel in 60 seconds.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Templates", "Pricing", "Changelog"] },
              { title: "Developers", links: ["Documentation", "API Reference", "SDK", "Status"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
            ].map((col, i) => (
              <div key={i}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
                {col.links.map((link, j) => (
                  <div key={j}><a href="#" className="nav-link" style={{ fontSize: 13, color: "#888", textDecoration: "none", lineHeight: 2.2, display: "block" }}>{link}</a></div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "#666" }}>© 2026 EzClaw. All rights reserved.</span>
            <div style={{ display: "flex", gap: 20 }}>
              {["GitHub", "Discord", "Twitter"].map((s, i) => (
                <a key={i} href="#" className="nav-link" style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ═══ STYLES ═══
const styles = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#08090c",
    color: "#fff",
    minHeight: "100vh",
    overflowX: "hidden",
    backgroundImage: noiseSvg,
    backgroundRepeat: "repeat",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "all 0.3s",
    padding: "0 24px",
  },
  navInner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
  },
  navLinks: {
    display: "flex",
    gap: 32,
  },
  navLink: {
    fontSize: 14,
    color: "#999",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.2s",
  },
  hero: {
    paddingTop: 140,
    paddingBottom: 80,
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 16px",
    borderRadius: 40,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: 13,
    color: "#aaa",
    marginBottom: 32,
  },
  heroTitle: {
    fontSize: 64,
    fontWeight: 800,
    fontFamily: "'Outfit', sans-serif",
    lineHeight: 1.1,
    letterSpacing: -2,
    color: "#fff",
    marginBottom: 24,
  },
  heroSub: {
    fontSize: 17,
    color: "#888",
    lineHeight: 1.7,
    marginBottom: 36,
  },
  statsBar: {
    display: "flex",
    justifyContent: "center",
    gap: 48,
    marginTop: 64,
    paddingTop: 40,
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
  statItem: {
    textAlign: "center",
  },
  section: {
    padding: "100px 24px",
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: "#ff6b35",
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "'JetBrains Mono', monospace",
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 700,
    fontFamily: "'Outfit', sans-serif",
    color: "#fff",
    textAlign: "center",
    lineHeight: 1.2,
    letterSpacing: -1,
    marginBottom: 16,
  },
  sectionSub: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    lineHeight: 1.6,
  },
  terminal: {
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(12,13,18,0.9)",
    overflow: "hidden",
  },
  terminalHeader: {
    padding: "10px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.02)",
  },
  termDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
  },
  terminalBody: {
    padding: 16,
    minHeight: 180,
  },
  featureCard: {
    padding: 28,
    borderRadius: 16,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "all 0.3s ease",
    cursor: "default",
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: "rgba(255,107,53,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ff6b35",
    marginBottom: 16,
  },
  templateCard: {
    padding: 20,
    borderRadius: 14,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  },
  wizardContainer: {
    maxWidth: 720,
    margin: "0 auto",
    padding: 32,
    borderRadius: 20,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
  },
  planCard: {
    padding: 28,
    borderRadius: 16,
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
  },
  testimonialCard: {
    padding: 28,
    borderRadius: 16,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "10px 22px",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg, #ff6b35, #e8432f)",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.2s",
  },
  btnGhost: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "10px 22px",
    borderRadius: 10,
    border: "none",
    background: "transparent",
    color: "#ccc",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.2s",
  },
  footer: {
    padding: "60px 24px 30px",
    borderTop: "1px solid rgba(255,255,255,0.04)",
  },
};
