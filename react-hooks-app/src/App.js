import React from 'react';

// Custom hooks
import useFetch from './useFetch';

// Styles
import './App.css';

const App = ({ login }) => {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  return (
    <>
      {data && (
        <ul>
          {Object.keys(data).map((key, i) => {
            return <li key={i}>{`${key}: ${data[key]}`}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default App;
