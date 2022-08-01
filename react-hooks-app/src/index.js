import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';

// Styles
import './index.css';

// Global context
const TreesContext = createContext();

export const useTrees = () => {
  const { trees, log } = useContext(TreesContext);
  return { trees, log };
};

const trees = [
  { id: 1, type: 'Fir' },
  { id: 2, type: 'Oak' },
  { id: 3, type: 'Mahogany' },
  { id: 4, type: 'Teak' },
];

const log = [
  { id: 1, type: 'Fir log' },
  { id: 2, type: 'Oak log' },
  { id: 3, type: 'Mahogany log' },
  { id: 4, type: 'Teak log' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <TreesContext.Provider value={{ trees, log }}>
    <App />
  </TreesContext.Provider>
);
