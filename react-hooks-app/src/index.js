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
      <input
        type='text'
        value={soundProps.value}
        placeholder='Sound...'
        onChange={(e) => soundProps.onChange(e)}
      />
      <input
        type='color'
        value={colorProps.value}
        onChange={(e) => colorProps.onChange(e)}
      />
      <button>Add</button>
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
