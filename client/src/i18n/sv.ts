export const sv = {
  // Nav
  nav: {
    features: 'Funktioner',
    templates: 'Mallar',
    pricing: 'Priser',
    docs: 'Dokumentation',
    signIn: 'Logga in',
    signOut: 'Logga ut',
    getStarted: 'Kom igång',
  },

  // Hero
  hero: {
    badge: 'Drivs av OpenClaw — 187K+ GitHub-stjärnor',
    titleLine1: 'Din OpenClaw,',
    titleLine2: 'Redo på 60 sekunder',
    subtitle: 'Välj en mall, kanal och modell — vi sköter hosting, uppdateringar, övervakning, säkerhet och underhåll. Det hanterade kontrollplanet för team.',
    deploy: 'Driftsätt din agent',
    demo: 'Se demo',
  },

  // Stats
  stats: {
    stars: 'GitHub-stjärnor',
    deployTime: 'Driftsättningstid',
    integrations: 'Integrationer',
    uptime: 'Drifttids-SLA',
  },

  // Problem / Solution
  problem: {
    label: 'PROBLEMET',
    title1: 'Alla vill ha OpenClaw.',
    title2: 'Nästan ingen kan konfigurera det.',
    subtitle: 'Egen hosting kräver Docker, SSH, Python-miljöer, portvidarebefordran, SSL-certifikat och timmars felsökning.',
    terminalSelf: 'terminal — egen hosting',
    terminalDeploy: 'claweasy — driftsätt',
    statusBad: '✗ 3 timmar senare... fortfarande inte igång',
    agentUrl: 'Agent URL: https://claweasy.io/agent/ax7k2m',
    line1: '$ docker compose up openclaw',
    err1: 'ERROR: port 5432 already in use',
    line2: '$ pip install -r requirements.txt',
    err2: 'ERROR: python 3.9 required, found 3.12',
    line3: '$ npm install && npm run build',
    err3: 'Build failed. 14 errors.',
    sol1: '→ Provisionerar din agent...',
    sol2: '→ Ansluter Telegram-kanal...',
    sol3: '→ Laddar Claude Sonnet 4...',
    sol4: '→ Installerar färdigheter: sales-prospector, email-manager...',
    sol5: '✓ Din ClawEasy-agent är live!',
  },

  // Deploy Wizard
  wizard: {
    label: '3-STEGS DRIFTSÄTTNING',
    title: 'Mall → Kanal → Modell → Live',
    subtitle: 'Välj vad din agent gör, var den lever och vilken hjärna som driver den. Det är allt.',
    stepTemplate: 'Mall',
    stepChannels: 'Kanaler',
    stepModel: 'Modell',
    back: '← Tillbaka',
    continue: 'Fortsätt →',
    deploy: '🦞 Driftsätt agent',
    connected: '● Ansluten',
  },

  // Features
  features: {
    label: 'KONTROLLPLAN',
    title: 'Allt du behöver för att köra AI-agenter i stor skala',
    subtitle: 'En instrumentpanel för att driftsätta, konfigurera, övervaka och skala hela din agentflotta.',
    deploy: {
      title: 'Driftsättning på 60 sekunder',
      desc: 'Från registrering till en körande agent på under en minut. Ingen Docker, ingen SSH, inga konfigurationsfiler. Välj och driftsätt bara.',
    },
    fleet: {
      title: 'Fleragentflotta',
      desc: 'Kör flera agenter över olika kanaler och användningsfall. Var och en isolerad, var och en övervakad, allt från en instrumentpanel.',
    },
    routing: {
      title: 'Smart modellrouting',
      desc: 'Dirigera enkla förfrågningar till snabba/billiga modeller och komplexa till kraftfulla modeller. Optimera kostnader automatiskt.',
    },
    security: {
      title: 'Företagssäkerhet',
      desc: 'gVisor-containerisolering, krypterade autentiseringsuppgifter, SSO/SAML, granskningsloggar och alternativ för datalagring.',
    },
    global: {
      title: 'Globalt + Kina',
      desc: 'Dubbelregionsarkitektur med stöd för både globala och kinesiska LLM-leverantörer, meddelandekanaler och betalningsmetoder.',
    },
    hotReload: {
      title: 'Omladdning utan omstart',
      desc: 'Ändra modeller, kanaler, färdigheter och regler direkt — ingen omstart krävs. Motor för regler på naturligt språk ingår.',
    },
  },

  // Channel Marquee
  channels: {
    label: 'ANSLUT ÖVERALLT',
  },

  // Template Showcase
  templateShowcase: {
    label: 'MALLMARKNADSPLATS',
    title: 'Förbyggda agenter för alla användningsfall',
    subtitle: 'Börja med en kurerad mall, anpassa den eller bygg från grunden.',
    deploy: 'Driftsätt →',
  },

  // Templates data
  templates: {
    salesProspector: { name: 'Säljprospekterare', desc: 'Automatisera utskick, kvalificera leads och hantera din säljpipeline', category: 'Affär' },
    supportAgent: { name: 'Supportagent', desc: 'Kundsupport dygnet runt över alla kanaler med smart eskalering', category: 'Support' },
    devopsMonitor: { name: 'DevOps-övervakare', desc: 'Övervaka driftsättningar, hantera larm och incidenter', category: 'Teknik' },
    hrRecruiter: { name: 'HR-rekryterare', desc: 'Granska CV:n, boka intervjuer och engagera kandidater', category: 'HR' },
    contentCreator: { name: 'Innehållsskapare', desc: 'Generera inlägg, hantera scheman och analysera engagemang', category: 'Marknadsföring' },
    personalAssistant: { name: 'Personlig assistent', desc: 'Hantera kalender, e-post, påminnelser och dagliga uppgifter', category: 'Personlig' },
    legalReviewer: { name: 'Juridisk granskare', desc: 'Analysera avtal, flagga risker och sammanfatta dokument', category: 'Juridik' },
    communityManager: { name: 'Community-ansvarig', desc: 'Moderera kanaler, engagera medlemmar och spåra sentiment', category: 'Community' },
    dataAnalyst: { name: 'Dataanalytiker', desc: 'Fråga databaser, generera rapporter och visualisera trender', category: 'Analys' },
  },

  // Pricing
  pricing: {
    label: 'ENKEL PRISSÄTTNING',
    title: 'Börja gratis. Skala efter behov.',
    subtitle: 'Alla planer inkluderar en gratis 14-dagars provperiod. Inget kreditkort krävs.',
    yearly: 'Årsvis (Spara 20%)',
    monthly: 'Månadsvis',
    mostPopular: 'Mest populär',
    custom: 'Anpassad',
    perMonth: '/mån',
    starter: {
      name: 'Starter',
      desc: 'För individer som precis börjat',
      features: ['1 agentinstans', '2 kanaler', 'Community-mallar', 'Grundläggande analys', '2 vCPU / 4GB RAM', '40GB SSD-lagring'],
      cta: 'Starta gratis provperiod',
    },
    pro: {
      name: 'Pro',
      desc: 'För avancerade användare som förlitar sig på AI dagligen',
      features: ['3 agentinstanser', 'Obegränsade kanaler', 'Alla mallar', 'Fullständig analys', '4 vCPU / 8GB RAM', '80GB SSD + Prioriterad support'],
      cta: 'Starta gratis provperiod',
    },
    max: {
      name: 'Max',
      desc: 'För team som behöver samarbete',
      features: ['10 agentinstanser', '5 teamplatser + RBAC', 'Delad arbetsyta', 'Teamfakturering + API-åtkomst', '8 vCPU / 16GB RAM', '160GB SSD + Prioriterad support'],
      cta: 'Starta gratis provperiod',
    },
  },

  // Testimonials
  testimonials: {
    label: 'BETRODD AV BYGGARE',
    title: 'Gå med bland tusentals som kör autonoma agenter',
    items: [
      { quote: 'ClawEasy förvandlade ett helgprojekt till ett produktionssystem. Min säljbot körs dygnet runt på Telegram och WhatsApp och stänger affärer medan jag sover.', author: 'Sarah K.', role: 'Grundare, SalesFlow' },
      { quote: 'Vi migrerade från egenhostad OpenClaw till ClawEasy och sparade 20 timmar/månad på underhåll. Teaminstrumentpanelen är en game-changer.', author: 'Marcus T.', role: 'CTO, DevScale' },
      { quote: 'Den dubbla stacken för Kina + Globalt var precis vad vi behövde. En plattform för WeChat i Kina och Slack för vårt amerikanska team.', author: 'Wei L.', role: 'VP Ops, CrossBridge' },
    ],
  },

  // CTA
  cta: {
    title1: 'Redo att driftsätta din',
    title2: 'första agent?',
    subtitle: 'Gratis 14-dagars provperiod. Inget kreditkort krävs. Driftsätt på 60 sekunder.',
    button: '🦞 Börja bygga gratis',
    check1: '✓ Gratis 14-dagars provperiod',
    check2: '✓ Inget kreditkort',
    check3: '✓ Avsluta när som helst',
  },

  // Footer
  footer: {
    desc: 'Det hanterade OpenClaw-kontrollplanet för team och företag. Driftsätt autonoma AI-agenter över valfri kanal på 60 sekunder.',
    copyright: '© 2026 ClawEasy. Alla rättigheter förbehållna.',
    product: { title: 'Produkt', links: ['Funktioner', 'Mallar', 'Priser', 'Ändringslogg'] },
    developers: { title: 'Utvecklare', links: ['Dokumentation', 'API-referens', 'SDK', 'Status'] },
    company: { title: 'Företag', links: ['Om oss', 'Blogg', 'Karriär', 'Kontakt'] },
    legal: { title: 'Juridik', links: ['Integritet', 'Villkor', 'Säkerhet', 'DPA'] },
  },

  // Auth Modal
  auth: {
    welcomeBack: 'Välkommen tillbaka',
    createAccount: 'Skapa ditt konto',
    signInSubtitle: 'Logga in på ditt ClawEasy-konto',
    signUpSubtitle: 'Kom igång med ClawEasy',
    continueGoogle: 'Fortsätt med Google',
    or: 'eller',
    emailConfirm: 'Kolla din e-post för att bekräfta ditt konto och logga sedan in.',
    namePlaceholder: 'Namn',
    emailPlaceholder: 'E-post',
    passwordPlaceholder: 'Lösenord',
    signInBtn: 'Logga in',
    signingIn: 'Loggar in...',
    creatingAccount: 'Skapar konto...',
    createAccountBtn: 'Skapa konto',
    nameRequired: 'Namn krävs',
    passwordMin: 'Lösenordet måste vara minst 6 tecken',
    noAccount: 'Har du inget konto?',
    signUp: 'Registrera dig',
    hasAccount: 'Har du redan ett konto?',
  },

  // Model badges
  models: {
    recommended: 'Rekommenderad',
    budget: 'Budget',
    china: 'Kina',
  },
};
