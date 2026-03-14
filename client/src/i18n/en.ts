export const en = {
  // Nav
  nav: {
    features: 'Features',
    templates: 'Templates',
    pricing: 'Pricing',
    docs: 'Docs',
    signIn: 'Sign In',
    signOut: 'Sign Out',
    getStarted: 'Get Started',
  },

  // Hero
  hero: {
    badge: 'Powered by OpenClaw — 187K+ GitHub Stars',
    titleLine1: 'Your OpenClaw,',
    titleLine2: 'Ready in 60 Seconds',
    subtitle: 'Choose a template, channel, and model — we handle hosting, updates, monitoring, security, and maintenance. The managed control plane for teams.',
    deploy: 'Deploy Your Agent',
    demo: 'Watch Demo',
  },

  // Stats
  stats: {
    stars: 'GitHub Stars',
    deployTime: 'Deploy Time',
    integrations: 'Integrations',
    uptime: 'Uptime SLA',
  },

  // Problem / Solution
  problem: {
    label: 'THE PROBLEM',
    title1: 'Everyone wants OpenClaw.',
    title2: 'Almost no one can set it up.',
    subtitle: 'Self-hosting requires Docker, SSH, Python environments, port forwarding, SSL certs, and hours of debugging.',
    terminalSelf: 'terminal — self-hosting',
    terminalDeploy: 'claweasy — deploy',
    statusBad: '✗ 3 hours later... still not running',
    agentUrl: 'Agent URL: https://claweasy.io/agent/ax7k2m',
    line1: '$ docker compose up openclaw',
    err1: 'ERROR: port 5432 already in use',
    line2: '$ pip install -r requirements.txt',
    err2: 'ERROR: python 3.9 required, found 3.12',
    line3: '$ npm install && npm run build',
    err3: 'Build failed. 14 errors.',
    sol1: '→ Provisioning your agent...',
    sol2: '→ Connecting Telegram channel...',
    sol3: '→ Loading Claude Sonnet 4...',
    sol4: '→ Installing skills: sales-prospector, email-manager...',
    sol5: '✓ Your ClawEasy agent is live!',
  },

  // Deploy Wizard
  wizard: {
    label: '3-STEP DEPLOY',
    title: 'Template → Channel → Model → Live',
    subtitle: "Pick what your agent does, where it lives, and which brain powers it. That's it.",
    stepTemplate: 'Template',
    stepChannels: 'Channels',
    stepModel: 'Model',
    back: '← Back',
    continue: 'Continue →',
    deploy: '🦞 Deploy Agent',
    connected: '● Connected',
  },

  // Features
  features: {
    label: 'CONTROL PLANE',
    title: 'Everything you need to run AI agents at scale',
    subtitle: 'One dashboard to deploy, configure, monitor, and scale your entire agent fleet.',
    deploy: {
      title: '60-Second Deploy',
      desc: 'From sign-up to a running agent in under a minute. No Docker, no SSH, no config files. Just choose and deploy.',
    },
    fleet: {
      title: 'Multi-Agent Fleet',
      desc: 'Run multiple agents across different channels and use cases. Each isolated, each monitored, all from one dashboard.',
    },
    routing: {
      title: 'Smart Model Routing',
      desc: 'Route simple queries to fast/cheap models and complex ones to powerful models. Optimize cost automatically.',
    },
    security: {
      title: 'Enterprise Security',
      desc: 'gVisor container isolation, encrypted credentials, SSO/SAML, audit logs, and data residency options.',
    },
    global: {
      title: 'Global + China',
      desc: 'Dual-region architecture supporting both global and Chinese LLM providers, messaging channels, and payment methods.',
    },
    hotReload: {
      title: 'Hot Reload Config',
      desc: 'Change models, channels, skills, and rules instantly — no restart needed. Natural language rules engine included.',
    },
  },

  // Channel Marquee
  channels: {
    label: 'CONNECT EVERYWHERE',
  },

  // Template Showcase
  templateShowcase: {
    label: 'TEMPLATE MARKETPLACE',
    title: 'Pre-built agents for every use case',
    subtitle: 'Start with a curated template, customize it, or build from scratch.',
    deploy: 'Deploy →',
  },

  // Templates data
  templates: {
    salesProspector: { name: 'Sales Prospector', desc: 'Automate outreach, qualify leads, and manage your sales pipeline', category: 'Business' },
    supportAgent: { name: 'Support Agent', desc: '24/7 customer support across all channels with smart escalation', category: 'Support' },
    devopsMonitor: { name: 'DevOps Monitor', desc: 'Monitor deployments, handle alerts, and manage incidents', category: 'Engineering' },
    hrRecruiter: { name: 'HR Recruiter', desc: 'Screen resumes, schedule interviews, and engage candidates', category: 'HR' },
    contentCreator: { name: 'Content Creator', desc: 'Generate posts, manage schedules, and analyze engagement', category: 'Marketing' },
    personalAssistant: { name: 'Personal Assistant', desc: 'Manage calendar, emails, reminders, and daily tasks', category: 'Personal' },
    legalReviewer: { name: 'Legal Reviewer', desc: 'Analyze contracts, flag risks, and summarize documents', category: 'Legal' },
    communityManager: { name: 'Community Manager', desc: 'Moderate channels, engage members, and track sentiment', category: 'Community' },
    dataAnalyst: { name: 'Data Analyst', desc: 'Query databases, generate reports, and visualize trends', category: 'Analytics' },
  },

  // Pricing
  pricing: {
    label: 'SIMPLE PRICING',
    title: 'Start free. Scale as you grow.',
    subtitle: 'All plans include a free 14-day trial. No credit card required.',
    yearly: 'Yearly (Save 20%)',
    monthly: 'Monthly',
    mostPopular: 'Most Popular',
    custom: 'Custom',
    perMonth: '/mo',
    starter: {
      name: 'Starter',
      desc: 'For individuals getting started',
      features: ['1 Agent Instance', '2 Channels', 'Community Templates', 'Basic Analytics', '2 vCPU / 4GB RAM', '40GB SSD Storage'],
      cta: 'Start Free Trial',
    },
    pro: {
      name: 'Pro',
      desc: 'For power users who rely on AI daily',
      features: ['3 Agent Instances', 'Unlimited Channels', 'All Templates', 'Full Analytics', '4 vCPU / 8GB RAM', '80GB SSD + Priority Support'],
      cta: 'Start Free Trial',
    },
    max: {
      name: 'Max',
      desc: 'For teams that need collaboration',
      features: ['10 Agent Instances', '5 Team Seats + RBAC', 'Shared Workspace', 'Team Billing + API Access', '8 vCPU / 16GB RAM', '160GB SSD + Priority Support'],
      cta: 'Start Free Trial',
    },
  },

  // Testimonials
  testimonials: {
    label: 'TRUSTED BY BUILDERS',
    title: 'Join thousands running autonomous agents',
    items: [
      { quote: 'ClawEasy turned a weekend project into a production system. My sales bot runs 24/7 across Telegram and WhatsApp, closing deals while I sleep.', author: 'Sarah K.', role: 'Founder, SalesFlow' },
      { quote: 'We migrated from self-hosted OpenClaw to ClawEasy and saved 20 hours/month on maintenance. The team dashboard is a game-changer.', author: 'Marcus T.', role: 'CTO, DevScale' },
      { quote: 'The China + Global dual-stack is exactly what we needed. One platform for WeChat in China and Slack for our US team.', author: 'Wei L.', role: 'VP Ops, CrossBridge' },
    ],
  },

  // CTA
  cta: {
    title1: 'Ready to deploy your',
    title2: 'first agent?',
    subtitle: 'Free 14-day trial. No credit card required. Deploy in 60 seconds.',
    button: '🦞 Start Building for Free',
    check1: '✓ Free 14-day trial',
    check2: '✓ No credit card',
    check3: '✓ Cancel anytime',
  },

  // Footer
  footer: {
    desc: 'The managed OpenClaw control plane for teams and businesses. Deploy autonomous AI agents across any channel in 60 seconds.',
    copyright: '© 2026 ClawEasy. All rights reserved.',
    product: { title: 'Product', links: ['Features', 'Templates', 'Pricing', 'Changelog'] },
    developers: { title: 'Developers', links: ['Documentation', 'API Reference', 'SDK', 'Status'] },
    company: { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
    legal: { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'DPA'] },
  },

  // Auth Modal
  auth: {
    welcomeBack: 'Welcome back',
    createAccount: 'Create your account',
    signInSubtitle: 'Sign in to your ClawEasy account',
    signUpSubtitle: 'Get started with ClawEasy',
    continueGoogle: 'Continue with Google',
    or: 'or',
    emailConfirm: 'Check your email to confirm your account, then sign in.',
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    signInBtn: 'Sign In',
    signingIn: 'Signing in...',
    creatingAccount: 'Creating account...',
    createAccountBtn: 'Create Account',
    nameRequired: 'Name is required',
    passwordMin: 'Password must be at least 6 characters',
    noAccount: "Don't have an account?",
    signUp: 'Sign Up',
    hasAccount: 'Already have an account?',
  },

  // Model badges
  models: {
    recommended: 'Recommended',
    budget: 'Budget',
    china: 'China',
  },
};
