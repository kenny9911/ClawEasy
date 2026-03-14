export const pt = {
  // Nav
  nav: {
    features: 'Recursos',
    templates: 'Modelos',
    pricing: 'Preços',
    docs: 'Documentação',
    signIn: 'Entrar',
    signOut: 'Sair',
    getStarted: 'Começar',
  },

  // Hero
  hero: {
    badge: 'Desenvolvido com OpenClaw — 187K+ Estrelas no GitHub',
    titleLine1: 'Seu OpenClaw,',
    titleLine2: 'Pronto em 60 Segundos',
    subtitle: 'Escolha um modelo, canal e IA — nós cuidamos da hospedagem, atualizações, monitoramento, segurança e manutenção. O painel de controle gerenciado para equipes.',
    deploy: 'Implantar Seu Agente',
    demo: 'Ver Demonstração',
  },

  // Stats
  stats: {
    stars: 'Estrelas no GitHub',
    deployTime: 'Tempo de Implantação',
    integrations: 'Integrações',
    uptime: 'SLA de Uptime',
  },

  // Problem / Solution
  problem: {
    label: 'O PROBLEMA',
    title1: 'Todo mundo quer o OpenClaw.',
    title2: 'Quase ninguém consegue configurar.',
    subtitle: 'Hospedar por conta própria exige Docker, SSH, ambientes Python, redirecionamento de portas, certificados SSL e horas de depuração.',
    terminalSelf: 'terminal — hospedagem própria',
    terminalDeploy: 'claweasy — implantação',
    statusBad: '✗ 3 horas depois... ainda não está funcionando',
    agentUrl: 'Agent URL: https://claweasy.io/agent/ax7k2m',
    line1: '$ docker compose up openclaw',
    err1: 'ERROR: port 5432 already in use',
    line2: '$ pip install -r requirements.txt',
    err2: 'ERROR: python 3.9 required, found 3.12',
    line3: '$ npm install && npm run build',
    err3: 'Build failed. 14 errors.',
    sol1: '→ Provisionando seu agente...',
    sol2: '→ Conectando canal do Telegram...',
    sol3: '→ Carregando Claude Sonnet 4...',
    sol4: '→ Instalando habilidades: sales-prospector, email-manager...',
    sol5: '✓ Seu agente ClawEasy está no ar!',
  },

  // Deploy Wizard
  wizard: {
    label: 'IMPLANTAÇÃO EM 3 PASSOS',
    title: 'Modelo → Canal → IA → No Ar',
    subtitle: 'Escolha o que seu agente faz, onde ele opera e qual cérebro o alimenta. Só isso.',
    stepTemplate: 'Modelo',
    stepChannels: 'Canais',
    stepModel: 'IA',
    back: '← Voltar',
    continue: 'Continuar →',
    deploy: '🦞 Implantar Agente',
    connected: '● Conectado',
  },

  // Features
  features: {
    label: 'PAINEL DE CONTROLE',
    title: 'Tudo que você precisa para executar agentes de IA em escala',
    subtitle: 'Um único painel para implantar, configurar, monitorar e escalar toda a sua frota de agentes.',
    deploy: {
      title: 'Implantação em 60 Segundos',
      desc: 'Do cadastro a um agente funcionando em menos de um minuto. Sem Docker, sem SSH, sem arquivos de configuração. Apenas escolha e implante.',
    },
    fleet: {
      title: 'Frota Multi-Agente',
      desc: 'Execute múltiplos agentes em diferentes canais e casos de uso. Cada um isolado, cada um monitorado, tudo em um único painel.',
    },
    routing: {
      title: 'Roteamento Inteligente de Modelos',
      desc: 'Direcione consultas simples para modelos rápidos/baratos e as complexas para modelos poderosos. Otimize custos automaticamente.',
    },
    security: {
      title: 'Segurança Empresarial',
      desc: 'Isolamento de contêineres gVisor, credenciais criptografadas, SSO/SAML, logs de auditoria e opções de residência de dados.',
    },
    global: {
      title: 'Global + China',
      desc: 'Arquitetura de região dupla com suporte a provedores de LLM globais e chineses, canais de mensagens e métodos de pagamento.',
    },
    hotReload: {
      title: 'Reconfiguração Instantânea',
      desc: 'Altere modelos, canais, habilidades e regras instantaneamente — sem necessidade de reiniciar. Motor de regras em linguagem natural incluído.',
    },
  },

  // Channel Marquee
  channels: {
    label: 'CONECTE-SE EM QUALQUER LUGAR',
  },

  // Template Showcase
  templateShowcase: {
    label: 'MARKETPLACE DE MODELOS',
    title: 'Agentes prontos para cada caso de uso',
    subtitle: 'Comece com um modelo curado, personalize ou construa do zero.',
    deploy: 'Implantar →',
  },

  // Templates data
  templates: {
    salesProspector: { name: 'Prospecção de Vendas', desc: 'Automatize abordagens, qualifique leads e gerencie seu funil de vendas', category: 'Negócios' },
    supportAgent: { name: 'Agente de Suporte', desc: 'Suporte ao cliente 24/7 em todos os canais com escalonamento inteligente', category: 'Suporte' },
    devopsMonitor: { name: 'Monitor DevOps', desc: 'Monitore implantações, gerencie alertas e administre incidentes', category: 'Engenharia' },
    hrRecruiter: { name: 'Recrutador RH', desc: 'Filtre currículos, agende entrevistas e engaje candidatos', category: 'RH' },
    contentCreator: { name: 'Criador de Conteúdo', desc: 'Gere publicações, gerencie agendas e analise engajamento', category: 'Marketing' },
    personalAssistant: { name: 'Assistente Pessoal', desc: 'Gerencie agenda, e-mails, lembretes e tarefas diárias', category: 'Pessoal' },
    legalReviewer: { name: 'Revisor Jurídico', desc: 'Analise contratos, sinalize riscos e resuma documentos', category: 'Jurídico' },
    communityManager: { name: 'Gestor de Comunidade', desc: 'Modere canais, engaje membros e acompanhe o sentimento', category: 'Comunidade' },
    dataAnalyst: { name: 'Analista de Dados', desc: 'Consulte bancos de dados, gere relatórios e visualize tendências', category: 'Análise' },
  },

  // Pricing
  pricing: {
    label: 'PREÇOS SIMPLES',
    title: 'Comece grátis. Escale conforme crescer.',
    subtitle: 'Todos os planos incluem teste grátis de 14 dias. Sem necessidade de cartão de crédito.',
    yearly: 'Anual (Economize 20%)',
    monthly: 'Mensal',
    mostPopular: 'Mais Popular',
    custom: 'Personalizado',
    perMonth: '/mês',
    starter: {
      name: 'Starter',
      desc: 'Para quem está começando',
      features: ['1 Instância de Agente', '2 Canais', 'Modelos da Comunidade', 'Análises Básicas', '2 vCPU / 4GB RAM', '40GB Armazenamento SSD'],
      cta: 'Iniciar Teste Grátis',
    },
    pro: {
      name: 'Pro',
      desc: 'Para usuários avançados que usam IA diariamente',
      features: ['3 Instâncias de Agente', 'Canais Ilimitados', 'Todos os Modelos', 'Análises Completas', '4 vCPU / 8GB RAM', '80GB SSD + Suporte Prioritário'],
      cta: 'Iniciar Teste Grátis',
    },
    max: {
      name: 'Max',
      desc: 'Para equipes que precisam de colaboração',
      features: ['10 Instâncias de Agente', '5 Vagas de Equipe + RBAC', 'Workspace Compartilhado', 'Faturamento de Equipe + Acesso API', '8 vCPU / 16GB RAM', '160GB SSD + Suporte Prioritário'],
      cta: 'Iniciar Teste Grátis',
    },
  },

  // Testimonials
  testimonials: {
    label: 'CONFIADO POR CONSTRUTORES',
    title: 'Junte-se a milhares executando agentes autônomos',
    items: [
      { quote: 'O ClawEasy transformou um projeto de fim de semana em um sistema de produção. Meu bot de vendas roda 24/7 no Telegram e WhatsApp, fechando negócios enquanto eu durmo.', author: 'Sarah K.', role: 'Fundadora, SalesFlow' },
      { quote: 'Migramos do OpenClaw auto-hospedado para o ClawEasy e economizamos 20 horas/mês em manutenção. O painel de equipe é revolucionário.', author: 'Marcus T.', role: 'CTO, DevScale' },
      { quote: 'A estrutura dupla China + Global é exatamente o que precisávamos. Uma plataforma para WeChat na China e Slack para nossa equipe nos EUA.', author: 'Wei L.', role: 'VP Operações, CrossBridge' },
    ],
  },

  // CTA
  cta: {
    title1: 'Pronto para implantar seu',
    title2: 'primeiro agente?',
    subtitle: 'Teste grátis de 14 dias. Sem cartão de crédito. Implante em 60 segundos.',
    button: '🦞 Comece a Construir Gratuitamente',
    check1: '✓ Teste grátis de 14 dias',
    check2: '✓ Sem cartão de crédito',
    check3: '✓ Cancele quando quiser',
  },

  // Footer
  footer: {
    desc: 'O painel de controle gerenciado OpenClaw para equipes e empresas. Implante agentes de IA autônomos em qualquer canal em 60 segundos.',
    copyright: '© 2026 ClawEasy. Todos os direitos reservados.',
    product: { title: 'Produto', links: ['Recursos', 'Modelos', 'Preços', 'Changelog'] },
    developers: { title: 'Desenvolvedores', links: ['Documentação', 'Referência da API', 'SDK', 'Status'] },
    company: { title: 'Empresa', links: ['Sobre', 'Blog', 'Carreiras', 'Contato'] },
    legal: { title: 'Jurídico', links: ['Privacidade', 'Termos', 'Segurança', 'DPA'] },
  },

  // Auth Modal
  auth: {
    welcomeBack: 'Bem-vindo de volta',
    createAccount: 'Crie sua conta',
    signInSubtitle: 'Entre na sua conta ClawEasy',
    signUpSubtitle: 'Comece a usar o ClawEasy',
    continueGoogle: 'Continuar com Google',
    or: 'ou',
    emailConfirm: 'Verifique seu e-mail para confirmar sua conta e depois entre.',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'E-mail',
    passwordPlaceholder: 'Senha',
    signInBtn: 'Entrar',
    signingIn: 'Entrando...',
    creatingAccount: 'Criando conta...',
    createAccountBtn: 'Criar Conta',
    nameRequired: 'O nome é obrigatório',
    passwordMin: 'A senha deve ter pelo menos 6 caracteres',
    noAccount: 'Não tem uma conta?',
    signUp: 'Cadastre-se',
    hasAccount: 'Já tem uma conta?',
  },

  // Model badges
  models: {
    recommended: 'Recomendado',
    budget: 'Econômico',
    china: 'China',
  },
};
