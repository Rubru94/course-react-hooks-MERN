import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  // document.createElement...
  return <h1>Hello World!!!</h1>;
}

const App2 = () => <h1>Hello World!!! from arrow function</h1>;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>,
);
