import React from 'react';
import ReactDOM from 'react-dom/client';

import { CounterApp } from './CounterApp';

import './styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterApp value={10}></CounterApp>
  </React.StrictMode>,
);
