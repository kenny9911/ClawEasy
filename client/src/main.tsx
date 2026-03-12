import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import './global.css';

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: '#ff6b35',
          colorBackground: '#1a1b1e',
          colorText: '#ffffff',
          colorInputBackground: '#08090c',
          colorInputText: '#ffffff',
          fontFamily: "'DM Sans', sans-serif",
        },
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);
