import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import { ViewProvider } from '../src/providers/ViewProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ViewProvider>
      <App />
    </ViewProvider>
  </React.StrictMode>
);
