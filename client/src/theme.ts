export const colors = {
  bg: '#08090c',
  primary: '#ff6b35',
  primaryDark: '#e8432f',
  primaryLight: '#ff8c42',
  success: '#22c55e',
  error: '#ef4444',
  white: '#ffffff',
  gray100: '#f1f5f9',
  gray200: '#e2e8f0',
  gray300: '#ccc',
  gray400: '#aaa',
  gray500: '#999',
  gray600: '#888',
  gray700: '#666',
  gray800: '#a0aec0',
} as const;

export const fonts = {
  body: "'DM Sans', sans-serif",
  heading: "'Outfit', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace",
} as const;

export const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;
