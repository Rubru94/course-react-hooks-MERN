import React from 'react';
import ReactDOM from 'react-dom/client';

// import AppHelloWorld from './hello-world-app'; /** default export */
import { App, App2, HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <HelloWorldApp />
    {/* <AppHelloWorld /> --> default export */}
    <App2 />

    <FirstApp />
  </React.StrictMode>,
);
