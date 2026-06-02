import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Import global CSS (Tailwind styles)

// Find the HTML element with id="root" in our index.html file
const rootElement = document.getElementById('root');

// If the root element doesn't exist, we can't mount our app, but we know it does since it's the standard Vite template.
// createRoot creates a React root to display our content inside the root element.
createRoot(rootElement!).render(
  // StrictMode is a tool for highlighting potential problems in an application during development.
  // It does not render any visible UI. It activates additional checks and warnings for its descendants.
  <StrictMode>
    {/* The main App component containing our routing and layouts */}
    <App />
  </StrictMode>,
);
