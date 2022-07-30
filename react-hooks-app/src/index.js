import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

const App = () => {
  const [status, setStatus] = useState('Not delivered');
  return (
    <div>
      <h1>The package is: {status}</h1>
      <button onClick={() => setStatus('Delivered')}>Delivered</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
