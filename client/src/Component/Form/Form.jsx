import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validation from '../validation';

const Form = () => {
  const [errors, setErrors] = useState({});
  const [dogsData, setDogsData] = useState({
    name: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    yearsOfLife: '',
    temperament: [],
  });

  const handleChange = (event) => {
    setDogsData({
      ...dogsData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...dogsData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Link to='/home'>
        <button>HOME</button>
      </Link>
      <h1>Create a new dog breed</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          value={dogsData.name}
        />
        {errors.name && <p>{errors.name}</p>}
        <hr />

        <label>Height Min:</label>
        <input
          type='number'
          name='heightMin'
          onChange={handleChange}
          value={dogsData.heightMin}
        />
        {errors.heightMin && <p>{errors.heightMin}</p>}
        <hr />

        <label>Height Max:</label>
        <input
          type='number'
          name='heightMax'
          onChange={handleChange}
          value={dogsData.heightMax}
        />
        {errors.heightMax && <p>{errors.heightMax}</p>}
        <hr />

        <label>Weight Min:</label>
        <input
          type='number'
          name='weightMin'
          onChange={handleChange}
          value={dogsData.weightMin}
        />
        {errors.weightMin && <p>{errors.weightMin}</p>}
        <hr />

        <label>Weight Max:</label>
        <input
          type='number'
          name='weightMax'
          onChange={handleChange}
          value={dogsData.weightMax}
        />
        {errors.weightMax && <p>{errors.weightMax}</p>}
        <hr />

        <label>Years of life</label>
        <input
          type='number'
          name='yearsOfLife'
          onChange={handleChange}
          value={dogsData.yearsOfLife}
        />
        {errors.yearsOfLife && <p>{errors.yearsOfLife}</p>}
        <hr />

        <label>Temperaments</label>
        <select></select>
        <hr />
        <button>Create Dog</button>
      </form>
    </div>
  );
};
export default Form;
