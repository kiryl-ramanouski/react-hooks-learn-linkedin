import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

const App = () => {
  const [name, setName] = useState('Jan');

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]);

  return (
    <section>
      <p>Congratulation {name}!</p>
      <button onClick={() => setName('Will')}>Change winner</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
