import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, temperaments, weight }) => {
  return (
    <div>
      <Link to={`/dogs/${id}`}>
        <img src={image} alt={name} />
      </Link>

      <h3>{name}</h3>
      <h5>{temperaments}</h5>
      <h5>{weight}</h5>
    </div>
  );
};

export default Card;
