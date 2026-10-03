import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { dataStore } from './services/dataStore';

// Kick off data prefetch immediately so it's ready by the time components need it
dataStore.ready().catch(console.warn);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
