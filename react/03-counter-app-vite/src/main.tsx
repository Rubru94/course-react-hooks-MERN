import React from 'react';
import ReactDOM from 'react-dom/client';

// import { CounterApp } from './CounterApp';

import './styles.scss';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FirstApp title={'title'} num={0}></FirstApp>
    {/* <CounterApp value={30}></CounterApp> */}
  </React.StrictMode>,
);
