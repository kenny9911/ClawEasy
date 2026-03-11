import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const cls = variant === 'primary'
    ? `${styles.primary} btn-primary-hover ${className}`
    : `${styles.ghost} ${className}`;

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
