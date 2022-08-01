import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

const App = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div>
      <label>
        <input type='checkbox' value={checked} onChange={toggle} />
        {checked ? 'checked' : 'unchecked'}
      </label>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
