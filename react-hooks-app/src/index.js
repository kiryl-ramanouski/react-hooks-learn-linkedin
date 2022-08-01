import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

const initialState = {
  message: 'hi',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'yell':
      return {
        message: 'HEY!',
      };
    case 'whisper':
      return {
        message: 'excuse me',
      };
    default:
      return {
        message: 'hi',
      };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state.message}</p>
      <button onClick={() => dispatch({ type: 'yell' })}>YELL</button>
      <button onClick={() => dispatch({ type: 'whisper' })}>whisper</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
