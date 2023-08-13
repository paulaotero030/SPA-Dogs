import './App.css';
import React from 'react';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cards from './Component/Cards/Cards';
import Nav from './Component/NavBar/Nav';
import axios from 'axios';

function App() {
  const [dogs, setDogs] = useState([]);

  const onSearch = (name) => {
    axios(`http://localhost:3000/dogs/${name}`).then(({ data }) => {
      if (data.name) {
        setDogs((oldDogs) => [...oldDogs, data]);
      } else {
        alert('¡There are no dogs with that name!');
      }
    });
  };

  return (
    <div className='App'>
      <h1>Henry Dogs</h1>
      <Switch> </Switch>
    </div>
  );
}

export default App;
