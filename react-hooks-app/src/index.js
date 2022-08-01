import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((response) => setData(response));
  }, [data]);

  if (data) {
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <p>No users</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
