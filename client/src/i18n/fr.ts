export const fr = {
  // Nav
  nav: {
    features: 'Fonctionnalités',
    templates: 'Modèles',
    pricing: 'Tarifs',
    docs: 'Documentation',
    signIn: 'Se connecter',
    signOut: 'Se déconnecter',
    getStarted: 'Commencer',
  },

  // Hero
  hero: {
    badge: 'Propulsé par OpenClaw — 187K+ étoiles GitHub',
    titleLine1: 'Votre OpenClaw,',
    titleLine2: 'Prêt en 60 secondes',
    subtitle: 'Choisissez un modèle, un canal et un LLM — nous gérons l\'hébergement, les mises à jour, la surveillance, la sécurité et la maintenance. Le plan de contrôle managé pour les équipes.',
    deploy: 'Déployer votre agent',
    demo: 'Voir la démo',
  },

  // Stats
  stats: {
    stars: 'Étoiles GitHub',
    deployTime: 'Temps de déploiement',
    integrations: 'Intégrations',
    uptime: 'SLA de disponibilité',
  },

  // Problem / Solution
  problem: {
    label: 'LE PROBLÈME',
    title1: 'Tout le monde veut OpenClaw.',
    title2: 'Presque personne ne peut le configurer.',
    subtitle: 'L\'auto-hébergement nécessite Docker, SSH, des environnements Python, la redirection de ports, des certificats SSL et des heures de débogage.',
    terminalSelf: 'terminal — auto-hébergement',
    terminalDeploy: 'claweasy — déploiement',
    statusBad: '✗ 3 heures plus tard... toujours pas fonctionnel',
    agentUrl: 'Agent URL: https://claweasy.io/agent/ax7k2m',
    line1: '$ docker compose up openclaw',
    err1: 'ERROR: port 5432 already in use',
    line2: '$ pip install -r requirements.txt',
    err2: 'ERROR: python 3.9 required, found 3.12',
    line3: '$ npm install && npm run build',
    err3: 'Build failed. 14 errors.',
    sol1: '→ Provisionnement de votre agent...',
    sol2: '→ Connexion du canal Telegram...',
    sol3: '→ Chargement de Claude Sonnet 4...',
    sol4: '→ Installation des compétences : sales-prospector, email-manager...',
    sol5: '✓ Votre agent ClawEasy est en ligne !',
  },

  // Deploy Wizard
  wizard: {
    label: 'DÉPLOIEMENT EN 3 ÉTAPES',
    title: 'Modèle → Canal → LLM → En ligne',
    subtitle: 'Choisissez ce que fait votre agent, où il opère et quel cerveau le propulse. C\'est tout.',
    stepTemplate: 'Modèle',
    stepChannels: 'Canaux',
    stepModel: 'LLM',
    back: '← Retour',
    continue: 'Continuer →',
    deploy: '🦞 Déployer l\'agent',
    connected: '● Connecté',
  },

  // Features
  features: {
    label: 'PLAN DE CONTRÔLE',
    title: 'Tout ce qu\'il faut pour gérer des agents IA à grande échelle',
    subtitle: 'Un tableau de bord unique pour déployer, configurer, surveiller et faire évoluer l\'ensemble de votre flotte d\'agents.',
    deploy: {
      title: 'Déploiement en 60 secondes',
      desc: 'De l\'inscription à un agent opérationnel en moins d\'une minute. Pas de Docker, pas de SSH, pas de fichiers de configuration. Choisissez et déployez.',
    },
    fleet: {
      title: 'Flotte multi-agents',
      desc: 'Exécutez plusieurs agents sur différents canaux et cas d\'usage. Chacun isolé, chacun surveillé, le tout depuis un seul tableau de bord.',
    },
    routing: {
      title: 'Routage intelligent des modèles',
      desc: 'Orientez les requêtes simples vers des modèles rapides et économiques et les requêtes complexes vers des modèles puissants. Optimisation automatique des coûts.',
    },
    security: {
      title: 'Sécurité entreprise',
      desc: 'Isolation des conteneurs gVisor, identifiants chiffrés, SSO/SAML, journaux d\'audit et options de résidence des données.',
    },
    global: {
      title: 'Global + Chine',
      desc: 'Architecture bi-région prenant en charge les fournisseurs de LLM mondiaux et chinois, les canaux de messagerie et les méthodes de paiement.',
    },
    hotReload: {
      title: 'Rechargement à chaud',
      desc: 'Modifiez les modèles, canaux, compétences et règles instantanément — aucun redémarrage nécessaire. Moteur de règles en langage naturel inclus.',
    },
  },

  // Channel Marquee
  channels: {
    label: 'CONNECTEZ-VOUS PARTOUT',
  },

  // Template Showcase
  templateShowcase: {
    label: 'MARKETPLACE DE MODÈLES',
    title: 'Des agents prêts à l\'emploi pour chaque cas d\'usage',
    subtitle: 'Partez d\'un modèle sélectionné, personnalisez-le ou créez de zéro.',
    deploy: 'Déployer →',
  },

  // Templates data
  templates: {
    salesProspector: { name: 'Prospecteur commercial', desc: 'Automatisez la prospection, qualifiez les leads et gérez votre pipeline de ventes', category: 'Business' },
    supportAgent: { name: 'Agent de support', desc: 'Support client 24h/24 sur tous les canaux avec escalade intelligente', category: 'Support' },
    devopsMonitor: { name: 'Moniteur DevOps', desc: 'Surveillez les déploiements, gérez les alertes et les incidents', category: 'Ingénierie' },
    hrRecruiter: { name: 'Recruteur RH', desc: 'Triez les CV, planifiez les entretiens et engagez les candidats', category: 'RH' },
    contentCreator: { name: 'Créateur de contenu', desc: 'Générez des publications, gérez les plannings et analysez l\'engagement', category: 'Marketing' },
    personalAssistant: { name: 'Assistant personnel', desc: 'Gérez agenda, e-mails, rappels et tâches quotidiennes', category: 'Personnel' },
    legalReviewer: { name: 'Analyste juridique', desc: 'Analysez les contrats, identifiez les risques et résumez les documents', category: 'Juridique' },
    communityManager: { name: 'Community Manager', desc: 'Modérez les canaux, engagez les membres et suivez le sentiment', category: 'Communauté' },
    dataAnalyst: { name: 'Analyste de données', desc: 'Interrogez les bases de données, générez des rapports et visualisez les tendances', category: 'Analytique' },
  },

  // Pricing
  pricing: {
    label: 'TARIFICATION SIMPLE',
    title: 'Commencez gratuitement. Évoluez à votre rythme.',
    subtitle: 'Tous les plans incluent un essai gratuit de 14 jours. Aucune carte bancaire requise.',
    yearly: 'Annuel (Économisez 20 %)',
    monthly: 'Mensuel',
    mostPopular: 'Le plus populaire',
    custom: 'Sur mesure',
    perMonth: '/mois',
    starter: {
      name: 'Starter',
      desc: 'Pour les particuliers qui débutent',
      features: ['1 instance d\'agent', '2 canaux', 'Modèles communautaires', 'Analytique de base', '2 vCPU / 4 Go RAM', '40 Go de stockage SSD'],
      cta: 'Essai gratuit',
    },
    pro: {
      name: 'Pro',
      desc: 'Pour les utilisateurs avancés qui comptent sur l\'IA au quotidien',
      features: ['3 instances d\'agent', 'Canaux illimités', 'Tous les modèles', 'Analytique complète', '4 vCPU / 8 Go RAM', '80 Go SSD + Support prioritaire'],
      cta: 'Essai gratuit',
    },
    max: {
      name: 'Max',
      desc: 'Pour les équipes qui ont besoin de collaborer',
      features: ['10 instances d\'agent', '5 membres + RBAC', 'Espace de travail partagé', 'Facturation équipe + accès API', '8 vCPU / 16 Go RAM', '160 Go SSD + Support prioritaire'],
      cta: 'Essai gratuit',
    },
  },

  // Testimonials
  testimonials: {
    label: 'APPROUVÉ PAR LES CRÉATEURS',
    title: 'Rejoignez des milliers d\'utilisateurs d\'agents autonomes',
    items: [
      { quote: 'ClawEasy a transformé un projet de week-end en système de production. Mon bot de vente tourne 24h/24 sur Telegram et WhatsApp, concluant des deals pendant que je dors.', author: 'Sarah K.', role: 'Fondatrice, SalesFlow' },
      { quote: 'Nous avons migré d\'OpenClaw auto-hébergé vers ClawEasy et économisé 20 heures par mois en maintenance. Le tableau de bord d\'équipe change la donne.', author: 'Marcus T.', role: 'CTO, DevScale' },
      { quote: 'La double infrastructure Chine + Global est exactement ce qu\'il nous fallait. Une seule plateforme pour WeChat en Chine et Slack pour notre équipe aux États-Unis.', author: 'Wei L.', role: 'VP Ops, CrossBridge' },
    ],
  },

  // CTA
  cta: {
    title1: 'Prêt à déployer votre',
    title2: 'premier agent ?',
    subtitle: 'Essai gratuit de 14 jours. Aucune carte bancaire requise. Déploiement en 60 secondes.',
    button: '🦞 Commencez gratuitement',
    check1: '✓ Essai gratuit de 14 jours',
    check2: '✓ Sans carte bancaire',
    check3: '✓ Annulation à tout moment',
  },

  // Footer
  footer: {
    desc: 'Le plan de contrôle managé OpenClaw pour les équipes et les entreprises. Déployez des agents IA autonomes sur n\'importe quel canal en 60 secondes.',
    copyright: '© 2026 ClawEasy. Tous droits réservés.',
    product: { title: 'Produit', links: ['Fonctionnalités', 'Modèles', 'Tarifs', 'Journal des modifications'] },
    developers: { title: 'Développeurs', links: ['Documentation', 'Référence API', 'SDK', 'Statut'] },
    company: { title: 'Entreprise', links: ['À propos', 'Blog', 'Carrières', 'Contact'] },
    legal: { title: 'Mentions légales', links: ['Confidentialité', 'Conditions', 'Sécurité', 'DPA'] },
  },

  // Auth Modal
  auth: {
    welcomeBack: 'Bon retour',
    createAccount: 'Créez votre compte',
    signInSubtitle: 'Connectez-vous à votre compte ClawEasy',
    signUpSubtitle: 'Commencez avec ClawEasy',
    continueGoogle: 'Continuer avec Google',
    or: 'ou',
    emailConfirm: 'Vérifiez vos e-mails pour confirmer votre compte, puis connectez-vous.',
    namePlaceholder: 'Nom',
    emailPlaceholder: 'E-mail',
    passwordPlaceholder: 'Mot de passe',
    signInBtn: 'Se connecter',
    signingIn: 'Connexion en cours...',
    creatingAccount: 'Création du compte...',
    createAccountBtn: 'Créer un compte',
    nameRequired: 'Le nom est requis',
    passwordMin: 'Le mot de passe doit contenir au moins 6 caractères',
    noAccount: 'Vous n\'avez pas de compte ?',
    signUp: 'S\'inscrire',
    hasAccount: 'Vous avez déjà un compte ?',
  },

  // Model badges
  models: {
    recommended: 'Recommandé',
    budget: 'Économique',
    china: 'Chine',
  },
};
