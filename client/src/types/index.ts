import type { ReactNode } from 'react';

export interface Channel {
  name: string;
  color: string;
}

export interface Model {
  name: string;
  provider: string;
  badge: string;
  color: string;
}

export interface Template {
  name: string;
  desc: string;
  icon: string;
  category: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface TerminalLine {
  text: string;
  delay: number;
  isError?: boolean;
  isSuccess?: boolean;
}
