import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

const App = () => {
  const [name, setName] = useState('Jan');
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? 'admin' : 'not admin'}`);
  }, [admin]);

  return (
    <section>
      <p>Congratulation {name}!</p>
      <button onClick={() => setName('Will')}>Change winner</button>
      <p>{admin ? 'logged in' : 'not logged in'}</p>
      <button onClick={() => setAdmin(true)}>Log in</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
