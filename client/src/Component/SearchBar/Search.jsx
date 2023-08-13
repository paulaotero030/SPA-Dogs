import React from 'react';
import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input
        type='search'
        value={name}
        placeholder='Type a race...'
        onChange={handleChange}
      />
      <button
        onClick={() => {
          onSearch(name);
          setName('');
        }}
      >
        Look for
      </button>
    </div>
  );
};
export default Search;
