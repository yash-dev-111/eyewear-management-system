import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Optic World</h1>
      <Link to="/prescription">
        <button>Add Prescription</button>
      </Link>
      &nbsp;&nbsp;

      <button>Frames Only</button>
    </div>
  );
};

export default HomePage;
