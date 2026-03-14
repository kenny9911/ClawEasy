export const ko = {
  // Nav
  nav: {
    features: '기능',
    templates: '템플릿',
    pricing: '요금제',
    docs: '문서',
    signIn: '로그인',
    signOut: '로그아웃',
    getStarted: '시작하기',
  },

  // Hero
  hero: {
    badge: 'OpenClaw 기반 — GitHub 스타 187K+',
    titleLine1: '나만의 OpenClaw,',
    titleLine2: '60초 만에 준비 완료',
    subtitle: '템플릿, 채널, 모델을 선택하세요 — 호스팅, 업데이트, 모니터링, 보안, 유지보수는 저희가 담당합니다. 팀을 위한 매니지드 컨트롤 플레인.',
    deploy: '에이전트 배포하기',
    demo: '데모 보기',
  },

  // Stats
  stats: {
    stars: 'GitHub 스타',
    deployTime: '배포 시간',
    integrations: '통합 서비스',
    uptime: '가동률 SLA',
  },

  // Problem / Solution
  problem: {
    label: '문제점',
    title1: '모두가 OpenClaw을 원합니다.',
    title2: '하지만 거의 아무도 설정하지 못합니다.',
    subtitle: '셀프 호스팅에는 Docker, SSH, Python 환경, 포트 포워딩, SSL 인증서, 그리고 수 시간의 디버깅이 필요합니다.',
    terminalSelf: '터미널 — 셀프 호스팅',
    terminalDeploy: 'claweasy — 배포',
    statusBad: '✗ 3시간 후... 아직도 실행되지 않음',
    agentUrl: 'Agent URL: https://claweasy.io/agent/ax7k2m',
    line1: '$ docker compose up openclaw',
    err1: 'ERROR: port 5432 already in use',
    line2: '$ pip install -r requirements.txt',
    err2: 'ERROR: python 3.9 required, found 3.12',
    line3: '$ npm install && npm run build',
    err3: 'Build failed. 14 errors.',
    sol1: '→ 에이전트 프로비저닝 중...',
    sol2: '→ Telegram 채널 연결 중...',
    sol3: '→ Claude Sonnet 4 로딩 중...',
    sol4: '→ 스킬 설치 중: sales-prospector, email-manager...',
    sol5: '✓ ClawEasy 에이전트가 라이브 상태입니다!',
  },

  // Deploy Wizard
  wizard: {
    label: '3단계 배포',
    title: '템플릿 → 채널 → 모델 → 라이브',
    subtitle: '에이전트의 역할, 활동 채널, 구동 모델을 선택하세요. 그게 전부입니다.',
    stepTemplate: '템플릿',
    stepChannels: '채널',
    stepModel: '모델',
    back: '← 뒤로',
    continue: '계속 →',
    deploy: '🦞 에이전트 배포',
    connected: '● 연결됨',
  },

  // Features
  features: {
    label: '컨트롤 플레인',
    title: 'AI 에이전트를 대규모로 운영하는 데 필요한 모든 것',
    subtitle: '하나의 대시보드에서 전체 에이전트 플릿을 배포, 구성, 모니터링, 확장하세요.',
    deploy: {
      title: '60초 배포',
      desc: '가입부터 에이전트 실행까지 1분 이내. Docker도, SSH도, 설정 파일도 필요 없습니다. 선택하고 배포하세요.',
    },
    fleet: {
      title: '멀티 에이전트 플릿',
      desc: '다양한 채널과 사용 사례에 걸쳐 여러 에이전트를 실행하세요. 각각 격리되고, 각각 모니터링되며, 모두 하나의 대시보드에서 관리됩니다.',
    },
    routing: {
      title: '스마트 모델 라우팅',
      desc: '간단한 쿼리는 빠르고 저렴한 모델로, 복잡한 쿼리는 강력한 모델로 라우팅합니다. 비용을 자동으로 최적화합니다.',
    },
    security: {
      title: '엔터프라이즈 보안',
      desc: 'gVisor 컨테이너 격리, 암호화된 자격 증명, SSO/SAML, 감사 로그, 데이터 상주 옵션을 제공합니다.',
    },
    global: {
      title: '글로벌 + 중국',
      desc: '글로벌 및 중국 LLM 제공업체, 메시징 채널, 결제 수단을 모두 지원하는 듀얼 리전 아키텍처.',
    },
    hotReload: {
      title: '핫 리로드 설정',
      desc: '모델, 채널, 스킬, 규칙을 즉시 변경하세요 — 재시작이 필요 없습니다. 자연어 규칙 엔진이 포함되어 있습니다.',
    },
  },

  // Channel Marquee
  channels: {
    label: '어디서든 연결',
  },

  // Template Showcase
  templateShowcase: {
    label: '템플릿 마켓플레이스',
    title: '모든 사용 사례를 위한 사전 구축 에이전트',
    subtitle: '큐레이션된 템플릿으로 시작하거나, 맞춤 설정하거나, 처음부터 직접 만드세요.',
    deploy: '배포 →',
  },

  // Templates data
  templates: {
    salesProspector: { name: '영업 프로스펙터', desc: '아웃리치 자동화, 리드 검증, 영업 파이프라인 관리', category: '비즈니스' },
    supportAgent: { name: '고객지원 에이전트', desc: '스마트 에스컬레이션을 갖춘 모든 채널에서의 24/7 고객 지원', category: '지원' },
    devopsMonitor: { name: 'DevOps 모니터', desc: '배포 모니터링, 알림 처리, 인시던트 관리', category: '엔지니어링' },
    hrRecruiter: { name: 'HR 리크루터', desc: '이력서 심사, 면접 일정 관리, 후보자 소통', category: 'HR' },
    contentCreator: { name: '콘텐츠 크리에이터', desc: '게시물 생성, 일정 관리, 참여도 분석', category: '마케팅' },
    personalAssistant: { name: '개인 비서', desc: '캘린더, 이메일, 알림, 일상 업무 관리', category: '개인' },
    legalReviewer: { name: '법률 리뷰어', desc: '계약서 분석, 리스크 식별, 문서 요약', category: '법률' },
    communityManager: { name: '커뮤니티 매니저', desc: '채널 관리, 멤버 참여 유도, 감정 분석 추적', category: '커뮤니티' },
    dataAnalyst: { name: '데이터 분석가', desc: '데이터베이스 쿼리, 보고서 생성, 트렌드 시각화', category: '분석' },
  },

  // Pricing
  pricing: {
    label: '심플한 요금제',
    title: '무료로 시작하세요. 성장에 맞춰 확장하세요.',
    subtitle: '모든 요금제에 14일 무료 체험이 포함됩니다. 신용카드가 필요 없습니다.',
    yearly: '연간 (20% 할인)',
    monthly: '월간',
    mostPopular: '가장 인기',
    custom: '맞춤형',
    perMonth: '/월',
    starter: {
      name: 'Starter',
      desc: '처음 시작하는 개인 사용자를 위한 플랜',
      features: ['에이전트 1개', '채널 2개', '커뮤니티 템플릿', '기본 분석', '2 vCPU / 4GB RAM', '40GB SSD 스토리지'],
      cta: '무료 체험 시작',
    },
    pro: {
      name: 'Pro',
      desc: 'AI를 매일 활용하는 파워 유저를 위한 플랜',
      features: ['에이전트 3개', '무제한 채널', '모든 템플릿', '전체 분석', '4 vCPU / 8GB RAM', '80GB SSD + 우선 지원'],
      cta: '무료 체험 시작',
    },
    max: {
      name: 'Max',
      desc: '협업이 필요한 팀을 위한 플랜',
      features: ['에이전트 10개', '팀 시트 5개 + RBAC', '공유 워크스페이스', '팀 결제 + API 액세스', '8 vCPU / 16GB RAM', '160GB SSD + 우선 지원'],
      cta: '무료 체험 시작',
    },
  },

  // Testimonials
  testimonials: {
    label: '빌더들의 신뢰',
    title: '자율 에이전트를 운영하는 수천 명과 함께하세요',
    items: [
      { quote: 'ClawEasy 덕분에 주말 프로젝트가 프로덕션 시스템이 되었습니다. 제 영업 봇이 Telegram과 WhatsApp에서 24/7 실행되며, 제가 자는 동안에도 거래를 성사시킵니다.', author: 'Sarah K.', role: 'Founder, SalesFlow' },
      { quote: '셀프 호스팅 OpenClaw에서 ClawEasy로 마이그레이션하여 매월 유지보수 시간을 20시간 절약했습니다. 팀 대시보드는 정말 혁신적입니다.', author: 'Marcus T.', role: 'CTO, DevScale' },
      { quote: '중국 + 글로벌 듀얼 스택이 정확히 저희에게 필요한 것이었습니다. 중국에서는 WeChat, 미국 팀에서는 Slack을 하나의 플랫폼에서 사용합니다.', author: 'Wei L.', role: 'VP Ops, CrossBridge' },
    ],
  },

  // CTA
  cta: {
    title1: '첫 번째 에이전트를',
    title2: '배포할 준비가 되셨나요?',
    subtitle: '14일 무료 체험. 신용카드 불필요. 60초 만에 배포.',
    button: '🦞 무료로 시작하기',
    check1: '✓ 14일 무료 체험',
    check2: '✓ 신용카드 불필요',
    check3: '✓ 언제든 해지 가능',
  },

  // Footer
  footer: {
    desc: '팀과 비즈니스를 위한 매니지드 OpenClaw 컨트롤 플레인. 60초 만에 모든 채널에 자율 AI 에이전트를 배포하세요.',
    copyright: '© 2026 ClawEasy. All rights reserved.',
    product: { title: '제품', links: ['기능', '템플릿', '요금제', '변경 내역'] },
    developers: { title: '개발자', links: ['문서', 'API 레퍼런스', 'SDK', '상태'] },
    company: { title: '회사', links: ['소개', '블로그', '채용', '문의'] },
    legal: { title: '법적 고지', links: ['개인정보처리방침', '이용약관', '보안', 'DPA'] },
  },

  // Auth Modal
  auth: {
    welcomeBack: '다시 오신 것을 환영합니다',
    createAccount: '계정 만들기',
    signInSubtitle: 'ClawEasy 계정에 로그인하세요',
    signUpSubtitle: 'ClawEasy 시작하기',
    continueGoogle: 'Google로 계속하기',
    or: '또는',
    emailConfirm: '이메일을 확인하여 계정을 인증한 후 로그인하세요.',
    namePlaceholder: '이름',
    emailPlaceholder: '이메일',
    passwordPlaceholder: '비밀번호',
    signInBtn: '로그인',
    signingIn: '로그인 중...',
    creatingAccount: '계정 생성 중...',
    createAccountBtn: '계정 만들기',
    nameRequired: '이름은 필수 항목입니다',
    passwordMin: '비밀번호는 최소 6자 이상이어야 합니다',
    noAccount: '계정이 없으신가요?',
    signUp: '회원가입',
    hasAccount: '이미 계정이 있으신가요?',
  },

  // Model badges
  models: {
    recommended: '추천',
    budget: '저가형',
    china: '중국',
  },
};
