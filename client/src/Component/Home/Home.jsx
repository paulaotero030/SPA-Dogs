import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../Card/Card';
import Nav from '../NavBar/Nav';
import Search from '../SearchBar/Search';
import Paginado from '../Paginado/Paginado';
import Order from '../Order/Order';
import Filter from '../Filter/Filter';

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Search></Search>
      <Cards></Cards>
      <Paginado></Paginado>
      <Filter></Filter>
      <Order></Order>
    </div>
  );
};

export default Home;
