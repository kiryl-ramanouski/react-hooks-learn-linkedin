import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

const App = () => {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(1);
        }}
      >
        Add 1
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
