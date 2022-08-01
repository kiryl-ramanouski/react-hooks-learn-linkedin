import React from 'react';

// Custom hooks
import { useTrees } from './index';

// Styles
import './App.css';

const App = () => {
  const { trees, log } = useTrees();
  return (
    <>
      <h1 style={{ color: 'red', textAlign: 'center' }}>My trees</h1>
      <ul>
        {trees.map((item) => {
          return <li key={item.id}>{item.type}</li>;
        })}
      </ul>
      <h2 style={{ color: 'red', textAlign: 'center' }}>Use it to get log:</h2>
      <ul>
        {log.map((item) => {
          return <li key={item.id}>{item.type}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
