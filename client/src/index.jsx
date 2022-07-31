import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ProvidersWrapper } from './components/ProvidersWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  </React.StrictMode>
);
