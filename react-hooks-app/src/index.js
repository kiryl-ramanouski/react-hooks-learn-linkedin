import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
