import React from 'react';
import ReactDOM from 'react-dom/client';

// import AppHelloWorld from './hello-world-app'; /** default export */
// import { App, App2, HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HelloWorldApp /> */}
    {/* <AppHelloWorld /> --> default export */}
    {/* <App2 /> */}

    {/* <FirstApp title="Hello world !!!" subtitle={123} /> */}
    <FirstApp title="Hello world" num={10} />
    <CounterApp value={10}></CounterApp>
  </React.StrictMode>,
);
