import React from 'react';
import ReactDOM from 'react-dom/client';

// Custom hooks
import useInput from './Hooks/useInput';

// Styles
import './index.css';

const App = () => {
  const [soundProps, resetSound] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${soundProps.value} sounds like ${colorProps.value}`);
    resetSound();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='Sound...' {...soundProps} />
      <input type='color' {...colorProps} />
      <button>Add</button>
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
