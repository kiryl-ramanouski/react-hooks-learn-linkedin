import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// External components
import { FaStar } from 'react-icons/fa';

// Styles
import './index.css';

// Helpers functions
const createArray = (length) => [...Array(length)];

// Components
const Star = ({ selected = false, onSelect }) => {
  return (
    <FaStar
      color={selected ? 'red' : 'grey'}
      onClick={() => onSelect()}
      cursor='pointer'
    />
  );
};

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((item, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => {
            setSelectedStars(i + 1);
          }}
        />
      ))}
      <p>
        Selected {selectedStars} from {totalStars}
      </p>
    </>
  );
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
