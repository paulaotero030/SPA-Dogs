import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>"Welcome Human"</h1>
      <h2>Search for a dog breed or create one</h2>
      <Link to='/home'>
        <button>Begin</button>
      </Link>
    </div>
  );
};

export default Landing;
