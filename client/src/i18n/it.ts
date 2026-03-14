export const it = {
  // Nav
  nav: {
    features: 'Funzionalità',
    templates: 'Modelli',
    pricing: 'Prezzi',
    docs: 'Documentazione',
    signIn: 'Accedi',
    signOut: 'Esci',
    getStarted: 'Inizia Ora',
  },

  // Hero
  hero: {
    badge: 'Basato su OpenClaw — 187K+ Stelle su GitHub',
    titleLine1: 'Il tuo OpenClaw,',
    titleLine2: 'Pronto in 60 Secondi',
    subtitle: 'Scegli un modello, un canale e un modello AI — noi ci occupiamo di hosting, aggiornamenti, monitoraggio, sicurezza e manutenzione. Il piano di controllo gestito per i team.',
    deploy: 'Distribuisci il Tuo Agente',
    demo: 'Guarda la Demo',
  },

  // Stats
  stats: {
    stars: 'Stelle su GitHub',
    deployTime: 'Tempo di Deploy',
    integrations: 'Integrazioni',
    uptime: 'SLA Uptime',
  },

  // Problem / Solution
  problem: {
    label: 'IL PROBLEMA',
    title1: 'Tutti vogliono OpenClaw.',
    title2: 'Quasi nessuno riesce a configurarlo.',
    subtitle: 'L\'hosting autonomo richiede Docker, SSH, ambienti Python, port forwarding, certificati SSL e ore di debug.',
    terminalSelf: 'terminale — hosting autonomo',
    terminalDeploy: 'claweasy — deploy',
    statusBad: '✗ 3 ore dopo... ancora non funziona',
    agentUrl: 'Agent URL: https://claweasy.io/agent/ax7k2m',
    line1: '$ docker compose up openclaw',
    err1: 'ERROR: port 5432 already in use',
    line2: '$ pip install -r requirements.txt',
    err2: 'ERROR: python 3.9 required, found 3.12',
    line3: '$ npm install && npm run build',
    err3: 'Build failed. 14 errors.',
    sol1: '→ Provisioning del tuo agente...',
    sol2: '→ Connessione al canale Telegram...',
    sol3: '→ Caricamento di Claude Sonnet 4...',
    sol4: '→ Installazione skill: sales-prospector, email-manager...',
    sol5: '✓ Il tuo agente ClawEasy è attivo!',
  },

  // Deploy Wizard
  wizard: {
    label: 'DEPLOY IN 3 PASSI',
    title: 'Modello → Canale → Modello AI → Online',
    subtitle: 'Scegli cosa fa il tuo agente, dove opera e quale intelligenza lo alimenta. Tutto qui.',
    stepTemplate: 'Modello',
    stepChannels: 'Canali',
    stepModel: 'Modello AI',
    back: '← Indietro',
    continue: 'Continua →',
    deploy: '🦞 Distribuisci Agente',
    connected: '● Connesso',
  },

  // Features
  features: {
    label: 'PIANO DI CONTROLLO',
    title: 'Tutto ciò che serve per gestire agenti AI su larga scala',
    subtitle: 'Un\'unica dashboard per distribuire, configurare, monitorare e scalare l\'intera flotta di agenti.',
    deploy: {
      title: 'Deploy in 60 Secondi',
      desc: 'Dalla registrazione a un agente operativo in meno di un minuto. Niente Docker, niente SSH, niente file di configurazione. Scegli e distribuisci.',
    },
    fleet: {
      title: 'Flotta Multi-Agente',
      desc: 'Esegui più agenti su canali e casi d\'uso diversi. Ognuno isolato, ognuno monitorato, tutti da un\'unica dashboard.',
    },
    routing: {
      title: 'Routing Intelligente dei Modelli',
      desc: 'Indirizza le query semplici verso modelli veloci/economici e quelle complesse verso modelli potenti. Ottimizza i costi automaticamente.',
    },
    security: {
      title: 'Sicurezza Enterprise',
      desc: 'Isolamento container gVisor, credenziali crittografate, SSO/SAML, log di audit e opzioni di residenza dei dati.',
    },
    global: {
      title: 'Globale + Cina',
      desc: 'Architettura dual-region che supporta sia provider LLM globali che cinesi, canali di messaggistica e metodi di pagamento.',
    },
    hotReload: {
      title: 'Configurazione Hot Reload',
      desc: 'Cambia modelli, canali, skill e regole istantaneamente — nessun riavvio necessario. Motore di regole in linguaggio naturale incluso.',
    },
  },

  // Channel Marquee
  channels: {
    label: 'CONNETTITI OVUNQUE',
  },

  // Template Showcase
  templateShowcase: {
    label: 'MARKETPLACE DEI MODELLI',
    title: 'Agenti pre-configurati per ogni caso d\'uso',
    subtitle: 'Parti da un modello curato, personalizzalo o costruisci da zero.',
    deploy: 'Distribuisci →',
  },

  // Templates data
  templates: {
    salesProspector: { name: 'Prospettore Vendite', desc: 'Automatizza il contatto, qualifica i lead e gestisci la pipeline di vendita', category: 'Business' },
    supportAgent: { name: 'Agente Supporto', desc: 'Assistenza clienti 24/7 su tutti i canali con escalation intelligente', category: 'Supporto' },
    devopsMonitor: { name: 'Monitor DevOps', desc: 'Monitora i deployment, gestisci gli alert e coordina gli incidenti', category: 'Ingegneria' },
    hrRecruiter: { name: 'Recruiter HR', desc: 'Analizza curriculum, pianifica colloqui e coinvolgi i candidati', category: 'HR' },
    contentCreator: { name: 'Creatore di Contenuti', desc: 'Genera post, gestisci calendari e analizza l\'engagement', category: 'Marketing' },
    personalAssistant: { name: 'Assistente Personale', desc: 'Gestisci calendario, email, promemoria e attività quotidiane', category: 'Personale' },
    legalReviewer: { name: 'Revisore Legale', desc: 'Analizza contratti, segnala rischi e riassumi documenti', category: 'Legale' },
    communityManager: { name: 'Community Manager', desc: 'Modera i canali, coinvolgi i membri e monitora il sentiment', category: 'Community' },
    dataAnalyst: { name: 'Analista Dati', desc: 'Interroga database, genera report e visualizza tendenze', category: 'Analitica' },
  },

  // Pricing
  pricing: {
    label: 'PREZZI SEMPLICI',
    title: 'Inizia gratis. Scala man mano che cresci.',
    subtitle: 'Tutti i piani includono una prova gratuita di 14 giorni. Nessuna carta di credito richiesta.',
    yearly: 'Annuale (Risparmia il 20%)',
    monthly: 'Mensile',
    mostPopular: 'Più Popolare',
    custom: 'Personalizzato',
    perMonth: '/mese',
    starter: {
      name: 'Starter',
      desc: 'Per chi inizia',
      features: ['1 Istanza Agente', '2 Canali', 'Modelli Community', 'Analitica Base', '2 vCPU / 4GB RAM', '40GB SSD Storage'],
      cta: 'Inizia la Prova Gratuita',
    },
    pro: {
      name: 'Pro',
      desc: 'Per utenti avanzati che usano l\'AI ogni giorno',
      features: ['3 Istanze Agente', 'Canali Illimitati', 'Tutti i Modelli', 'Analitica Completa', '4 vCPU / 8GB RAM', '80GB SSD + Supporto Prioritario'],
      cta: 'Inizia la Prova Gratuita',
    },
    max: {
      name: 'Max',
      desc: 'Per team che necessitano di collaborazione',
      features: ['10 Istanze Agente', '5 Postazioni Team + RBAC', 'Workspace Condiviso', 'Fatturazione Team + Accesso API', '8 vCPU / 16GB RAM', '160GB SSD + Supporto Prioritario'],
      cta: 'Inizia la Prova Gratuita',
    },
  },

  // Testimonials
  testimonials: {
    label: 'SCELTO DAI COSTRUTTORI',
    title: 'Unisciti a migliaia di utenti che gestiscono agenti autonomi',
    items: [
      { quote: 'ClawEasy ha trasformato un progetto del weekend in un sistema di produzione. Il mio bot vendite funziona 24/7 su Telegram e WhatsApp, chiudendo affari mentre dormo.', author: 'Sarah K.', role: 'Fondatrice, SalesFlow' },
      { quote: 'Siamo migrati da OpenClaw self-hosted a ClawEasy e abbiamo risparmiato 20 ore al mese in manutenzione. La dashboard per i team è rivoluzionaria.', author: 'Marcus T.', role: 'CTO, DevScale' },
      { quote: 'Il dual-stack Cina + Globale è esattamente ciò di cui avevamo bisogno. Un\'unica piattaforma per WeChat in Cina e Slack per il nostro team negli USA.', author: 'Wei L.', role: 'VP Ops, CrossBridge' },
    ],
  },

  // CTA
  cta: {
    title1: 'Pronto a distribuire il tuo',
    title2: 'primo agente?',
    subtitle: 'Prova gratuita di 14 giorni. Nessuna carta di credito richiesta. Deploy in 60 secondi.',
    button: '🦞 Inizia a Costruire Gratis',
    check1: '✓ Prova gratuita di 14 giorni',
    check2: '✓ Nessuna carta di credito',
    check3: '✓ Cancella in qualsiasi momento',
  },

  // Footer
  footer: {
    desc: 'Il piano di controllo gestito OpenClaw per team e aziende. Distribuisci agenti AI autonomi su qualsiasi canale in 60 secondi.',
    copyright: '© 2026 ClawEasy. Tutti i diritti riservati.',
    product: { title: 'Prodotto', links: ['Funzionalità', 'Modelli', 'Prezzi', 'Changelog'] },
    developers: { title: 'Sviluppatori', links: ['Documentazione', 'Riferimento API', 'SDK', 'Stato'] },
    company: { title: 'Azienda', links: ['Chi Siamo', 'Blog', 'Carriere', 'Contatti'] },
    legal: { title: 'Legale', links: ['Privacy', 'Termini', 'Sicurezza', 'DPA'] },
  },

  // Auth Modal
  auth: {
    welcomeBack: 'Bentornato',
    createAccount: 'Crea il tuo account',
    signInSubtitle: 'Accedi al tuo account ClawEasy',
    signUpSubtitle: 'Inizia con ClawEasy',
    continueGoogle: 'Continua con Google',
    or: 'oppure',
    emailConfirm: 'Controlla la tua email per confermare l\'account, poi accedi.',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    signInBtn: 'Accedi',
    signingIn: 'Accesso in corso...',
    creatingAccount: 'Creazione account...',
    createAccountBtn: 'Crea Account',
    nameRequired: 'Il nome è obbligatorio',
    passwordMin: 'La password deve contenere almeno 6 caratteri',
    noAccount: 'Non hai un account?',
    signUp: 'Registrati',
    hasAccount: 'Hai già un account?',
  },

  // Model badges
  models: {
    recommended: 'Consigliato',
    budget: 'Economico',
    china: 'Cina',
  },
};
