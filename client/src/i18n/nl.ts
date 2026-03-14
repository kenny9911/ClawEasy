export const nl = {
  // Nav
  nav: {
    features: 'Functies',
    templates: 'Sjablonen',
    pricing: 'Prijzen',
    docs: 'Documentatie',
    signIn: 'Inloggen',
    signOut: 'Uitloggen',
    getStarted: 'Aan de slag',
  },

  // Hero
  hero: {
    badge: 'Aangedreven door OpenClaw — 187K+ GitHub Stars',
    titleLine1: 'Jouw OpenClaw,',
    titleLine2: 'Klaar in 60 seconden',
    subtitle: 'Kies een sjabloon, kanaal en model — wij regelen hosting, updates, monitoring, beveiliging en onderhoud. Het beheerde controleplatform voor teams.',
    deploy: 'Deploy je agent',
    demo: 'Bekijk demo',
  },

  // Stats
  stats: {
    stars: 'GitHub Stars',
    deployTime: 'Deploytijd',
    integrations: 'Integraties',
    uptime: 'Uptime SLA',
  },

  // Problem / Solution
  problem: {
    label: 'HET PROBLEEM',
    title1: 'Iedereen wil OpenClaw.',
    title2: 'Bijna niemand kan het opzetten.',
    subtitle: 'Self-hosting vereist Docker, SSH, Python-omgevingen, port forwarding, SSL-certificaten en uren debuggen.',
    terminalSelf: 'terminal — self-hosting',
    terminalDeploy: 'claweasy — deploy',
    statusBad: '✗ 3 uur later... draait nog steeds niet',
    agentUrl: 'Agent URL: https://claweasy.io/agent/ax7k2m',
    line1: '$ docker compose up openclaw',
    err1: 'ERROR: port 5432 already in use',
    line2: '$ pip install -r requirements.txt',
    err2: 'ERROR: python 3.9 required, found 3.12',
    line3: '$ npm install && npm run build',
    err3: 'Build failed. 14 errors.',
    sol1: '→ Je agent wordt ingericht...',
    sol2: '→ Telegram-kanaal verbinden...',
    sol3: '→ Claude Sonnet 4 laden...',
    sol4: '→ Vaardigheden installeren: sales-prospector, email-manager...',
    sol5: '✓ Je ClawEasy-agent is live!',
  },

  // Deploy Wizard
  wizard: {
    label: '3-STAPPEN DEPLOY',
    title: 'Sjabloon → Kanaal → Model → Live',
    subtitle: 'Kies wat je agent doet, waar hij werkt en welk brein hem aandrijft. Dat is alles.',
    stepTemplate: 'Sjabloon',
    stepChannels: 'Kanalen',
    stepModel: 'Model',
    back: '← Terug',
    continue: 'Doorgaan →',
    deploy: '🦞 Deploy agent',
    connected: '● Verbonden',
  },

  // Features
  features: {
    label: 'CONTROLEPLATFORM',
    title: 'Alles wat je nodig hebt om AI-agents op schaal te draaien',
    subtitle: 'Eén dashboard om je volledige agentvloot te deployen, configureren, monitoren en schalen.',
    deploy: {
      title: 'Deploy in 60 seconden',
      desc: 'Van aanmelding tot een draaiende agent in minder dan een minuut. Geen Docker, geen SSH, geen configuratiebestanden. Gewoon kiezen en deployen.',
    },
    fleet: {
      title: 'Multi-agent vloot',
      desc: 'Draai meerdere agents over verschillende kanalen en toepassingen. Elk geïsoleerd, elk gemonitord, alles vanuit één dashboard.',
    },
    routing: {
      title: 'Slimme modelroutering',
      desc: 'Stuur eenvoudige vragen naar snelle/goedkope modellen en complexe vragen naar krachtige modellen. Optimaliseer kosten automatisch.',
    },
    security: {
      title: 'Enterprise-beveiliging',
      desc: 'gVisor-containerisolatie, versleutelde inloggegevens, SSO/SAML, auditlogs en opties voor datalocatie.',
    },
    global: {
      title: 'Globaal + China',
      desc: 'Dual-region architectuur met ondersteuning voor zowel wereldwijde als Chinese LLM-providers, berichtenkanalen en betaalmethoden.',
    },
    hotReload: {
      title: 'Hot Reload configuratie',
      desc: 'Wijzig modellen, kanalen, vaardigheden en regels direct — geen herstart nodig. Inclusief natuurlijke taalregelengine.',
    },
  },

  // Channel Marquee
  channels: {
    label: 'OVERAL VERBINDEN',
  },

  // Template Showcase
  templateShowcase: {
    label: 'SJABLOONMARKTPLAATS',
    title: 'Kant-en-klare agents voor elke toepassing',
    subtitle: 'Begin met een samengesteld sjabloon, pas het aan, of bouw vanaf nul.',
    deploy: 'Deploy →',
  },

  // Templates data
  templates: {
    salesProspector: { name: 'Verkoopprospector', desc: 'Automatiseer outreach, kwalificeer leads en beheer je verkooppijplijn', category: 'Zakelijk' },
    supportAgent: { name: 'Supportagent', desc: '24/7 klantenservice via alle kanalen met slimme escalatie', category: 'Support' },
    devopsMonitor: { name: 'DevOps Monitor', desc: 'Monitor deployments, handel meldingen af en beheer incidenten', category: 'Engineering' },
    hrRecruiter: { name: 'HR Recruiter', desc: "Screenen van cv's, interviews inplannen en kandidaten benaderen", category: 'HR' },
    contentCreator: { name: 'Contentcreator', desc: 'Genereer berichten, beheer planningen en analyseer betrokkenheid', category: 'Marketing' },
    personalAssistant: { name: 'Persoonlijke assistent', desc: 'Beheer agenda, e-mails, herinneringen en dagelijkse taken', category: 'Persoonlijk' },
    legalReviewer: { name: 'Juridisch reviewer', desc: "Analyseer contracten, signaleer risico's en vat documenten samen", category: 'Juridisch' },
    communityManager: { name: 'Communitymanager', desc: 'Modereer kanalen, betrek leden en volg sentiment', category: 'Community' },
    dataAnalyst: { name: 'Data-analist', desc: 'Bevraag databases, genereer rapporten en visualiseer trends', category: 'Analytics' },
  },

  // Pricing
  pricing: {
    label: 'EENVOUDIGE PRIJZEN',
    title: 'Begin gratis. Schaal terwijl je groeit.',
    subtitle: 'Alle abonnementen bevatten een gratis proefperiode van 14 dagen. Geen creditcard vereist.',
    yearly: 'Jaarlijks (Bespaar 20%)',
    monthly: 'Maandelijks',
    mostPopular: 'Meest populair',
    custom: 'Op maat',
    perMonth: '/mnd',
    starter: {
      name: 'Starter',
      desc: 'Voor individuen die net beginnen',
      features: ['1 agentinstantie', '2 kanalen', 'Communitysjablonen', 'Basisanalytics', '2 vCPU / 4GB RAM', '40GB SSD-opslag'],
      cta: 'Start gratis proefperiode',
    },
    pro: {
      name: 'Pro',
      desc: 'Voor powergebruikers die dagelijks op AI vertrouwen',
      features: ['3 agentinstanties', 'Onbeperkte kanalen', 'Alle sjablonen', 'Volledige analytics', '4 vCPU / 8GB RAM', '80GB SSD + Prioriteitssupport'],
      cta: 'Start gratis proefperiode',
    },
    max: {
      name: 'Max',
      desc: 'Voor teams die samenwerking nodig hebben',
      features: ['10 agentinstanties', '5 teamplaatsen + RBAC', 'Gedeelde werkruimte', 'Teamfacturering + API-toegang', '8 vCPU / 16GB RAM', '160GB SSD + Prioriteitssupport'],
      cta: 'Start gratis proefperiode',
    },
  },

  // Testimonials
  testimonials: {
    label: 'VERTROUWD DOOR BOUWERS',
    title: 'Sluit je aan bij duizenden die autonome agents draaien',
    items: [
      { quote: 'ClawEasy veranderde een weekendproject in een productiesysteem. Mijn verkoopbot draait 24/7 op Telegram en WhatsApp en sluit deals terwijl ik slaap.', author: 'Sarah K.', role: 'Oprichter, SalesFlow' },
      { quote: 'We migreerden van zelf-gehoste OpenClaw naar ClawEasy en bespaarden 20 uur/maand aan onderhoud. Het teamdashboard is een gamechanger.', author: 'Marcus T.', role: 'CTO, DevScale' },
      { quote: 'De China + Globaal dual-stack is precies wat we nodig hadden. Eén platform voor WeChat in China en Slack voor ons Amerikaanse team.', author: 'Wei L.', role: 'VP Ops, CrossBridge' },
    ],
  },

  // CTA
  cta: {
    title1: 'Klaar om je eerste',
    title2: 'agent te deployen?',
    subtitle: 'Gratis proefperiode van 14 dagen. Geen creditcard vereist. Deploy in 60 seconden.',
    button: '🦞 Begin gratis met bouwen',
    check1: '✓ Gratis proefperiode van 14 dagen',
    check2: '✓ Geen creditcard',
    check3: '✓ Op elk moment opzegbaar',
  },

  // Footer
  footer: {
    desc: 'Het beheerde OpenClaw-controleplatform voor teams en bedrijven. Deploy autonome AI-agents via elk kanaal in 60 seconden.',
    copyright: '© 2026 ClawEasy. Alle rechten voorbehouden.',
    product: { title: 'Product', links: ['Functies', 'Sjablonen', 'Prijzen', 'Changelog'] },
    developers: { title: 'Ontwikkelaars', links: ['Documentatie', 'API-referentie', 'SDK', 'Status'] },
    company: { title: 'Bedrijf', links: ['Over ons', 'Blog', 'Vacatures', 'Contact'] },
    legal: { title: 'Juridisch', links: ['Privacy', 'Voorwaarden', 'Beveiliging', 'DPA'] },
  },

  // Auth Modal
  auth: {
    welcomeBack: 'Welkom terug',
    createAccount: 'Maak je account aan',
    signInSubtitle: 'Log in op je ClawEasy-account',
    signUpSubtitle: 'Ga aan de slag met ClawEasy',
    continueGoogle: 'Doorgaan met Google',
    or: 'of',
    emailConfirm: 'Controleer je e-mail om je account te bevestigen en log daarna in.',
    namePlaceholder: 'Naam',
    emailPlaceholder: 'E-mail',
    passwordPlaceholder: 'Wachtwoord',
    signInBtn: 'Inloggen',
    signingIn: 'Bezig met inloggen...',
    creatingAccount: 'Account aanmaken...',
    createAccountBtn: 'Account aanmaken',
    nameRequired: 'Naam is verplicht',
    passwordMin: 'Wachtwoord moet minimaal 6 tekens bevatten',
    noAccount: 'Heb je nog geen account?',
    signUp: 'Registreren',
    hasAccount: 'Heb je al een account?',
  },

  // Model badges
  models: {
    recommended: 'Aanbevolen',
    budget: 'Budget',
    china: 'China',
  },
};
