import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleAuthProvider } from './auth/GoogleAuthContext';
import App from './App';
import './global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleAuthProvider>
      <App />
    </GoogleAuthProvider>
  </StrictMode>
);
