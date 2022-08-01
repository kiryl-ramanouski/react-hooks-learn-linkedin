import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

const App = () => {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = '';
    color.current.value = '';
  };

  return (
    <form onSubmit={submit}>
      <input type='text' ref={sound} placeholder='Sound...' />
      <input type='color' ref={color} />
      <button>Add</button>
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
