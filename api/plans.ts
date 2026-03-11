import type { VercelRequest, VercelResponse } from '@vercel/node';

const plans = [
  {
    name: 'Starter', price: '$12', period: '/mo', desc: 'For individuals getting started',
    features: ['1 Agent Instance', '2 Channels', 'Community Templates', 'Basic Analytics', '2 vCPU / 4GB RAM', '40GB SSD Storage'],
    cta: 'Start Free Trial', popular: false,
  },
  {
    name: 'Pro', price: '$29', period: '/mo', desc: 'For power users who rely on AI daily',
    features: ['3 Agent Instances', 'Unlimited Channels', 'All Templates', 'Full Analytics', '4 vCPU / 8GB RAM', '80GB SSD + Priority Support'],
    cta: 'Start Free Trial', popular: true,
  },
  {
    name: 'Team', price: '$79', period: '/mo', desc: 'For teams that need collaboration',
    features: ['10 Agent Instances', '5 Team Seats + RBAC', 'Shared Workspace', 'Team Billing + API Access', '8 vCPU / 16GB RAM', '160GB SSD + Priority Support'],
    cta: 'Start Free Trial', popular: false,
  },
  {
    name: 'Enterprise', price: 'Custom', period: '', desc: 'For organizations at scale',
    features: ['Unlimited Agents & Seats', 'SSO / SAML', 'Audit Logs + Compliance', 'Data Residency Options', 'Dedicated Cluster', '24/7 Dedicated Support'],
    cta: 'Contact Sales', popular: false,
  },
];

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.json(plans);
}
