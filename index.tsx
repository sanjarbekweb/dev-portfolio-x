/**
 * Application Entry Point
 * 
 * Role: Initializes React application and mounts root component
 * Aim:
 * - Sets up React rendering pipeline
 * - Provides error handling for missing root element
 * - Enables React StrictMode for development warnings
 * - Serves as the application bootstrap point
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Root element validation - Ensures DOM element exists before mounting
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// React 18 root API - Creates root and renders application
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
