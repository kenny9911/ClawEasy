import type { Model } from '../types';

export const models: Model[] = [
  { name: 'Claude Sonnet', provider: 'Anthropic', badge: 'Recommended', color: '#D4A574' },
  { name: 'GPT-4o', provider: 'OpenAI', badge: '', color: '#10a37f' },
  { name: 'Gemini Pro', provider: 'Google', badge: '', color: '#4285F4' },
  { name: 'DeepSeek V3', provider: 'DeepSeek', badge: 'Budget', color: '#4F46E5' },
  { name: 'Qwen Max', provider: 'Alibaba', badge: 'China', color: '#FF6A00' },
  { name: 'Kimi', provider: 'Moonshot', badge: 'China', color: '#6366F1' },
];
