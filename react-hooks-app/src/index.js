import React from 'react';
import ReactDOM from 'react-dom/client';

// External components
import { FaStar } from 'react-icons/fa';

// Styles
import './index.css';

// Helpers functions
const createArray = (length) => [...Array(length)];

// Components
const Star = ({ selected = false }) => {
  return <FaStar color={selected ? 'red' : 'grey'} />;
};

const StarRating = ({ totalStars = 5 }) => {
  return createArray(totalStars).map((item, i) => <Star key={i} />);
};

const App = () => {
  return (
    <>
      <StarRating totalStars={10} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
