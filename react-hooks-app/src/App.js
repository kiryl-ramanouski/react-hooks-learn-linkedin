import React from 'react';

// Styles
import './App.css';

function App({ names }) {
  return (
    <div className='App'>
      {names.map((name, i) => {
        return <p key={i}>Hello {name}!</p>;
      })}
    </div>
  );
}

export default App;
