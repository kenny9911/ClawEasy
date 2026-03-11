import type { VercelRequest, VercelResponse } from '@vercel/node';

const templates = [
  { name: 'Sales Prospector', desc: 'Automate outreach, qualify leads, and manage your sales pipeline', icon: '🎯', category: 'Business' },
  { name: 'Support Agent', desc: '24/7 customer support across all channels with smart escalation', icon: '🛟', category: 'Support' },
  { name: 'DevOps Monitor', desc: 'Monitor deployments, handle alerts, and manage incidents', icon: '⚙️', category: 'Engineering' },
  { name: 'HR Recruiter', desc: 'Screen resumes, schedule interviews, and engage candidates', icon: '👥', category: 'HR' },
  { name: 'Content Creator', desc: 'Generate posts, manage schedules, and analyze engagement', icon: '✍️', category: 'Marketing' },
  { name: 'Personal Assistant', desc: 'Manage calendar, emails, reminders, and daily tasks', icon: '🦞', category: 'Personal' },
  { name: 'Legal Reviewer', desc: 'Analyze contracts, flag risks, and summarize documents', icon: '⚖️', category: 'Legal' },
  { name: 'Community Manager', desc: 'Moderate channels, engage members, and track sentiment', icon: '💬', category: 'Community' },
  { name: 'Data Analyst', desc: 'Query databases, generate reports, and visualize trends', icon: '📊', category: 'Analytics' },
];

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.json(templates);
}
