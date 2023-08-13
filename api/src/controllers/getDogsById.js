const axios = require('axios');
const { Op } = require('sequelize');
const { Dog, Temperament } = require('../db'); // Asegúrate de importar los modelos adecuados

const getDogsById = async (req, res) => {
  try {
    const idRaza = req.params.id;

    // Buscar la raza en la base de datos por ID
    const dog = await Dog.findByPk(idRaza, {
      include: {
        model: Temperament,
        attributes: ['name'],
      },
    });

    if (!dog) {
      // Si no se encuentra en la base de datos, buscar en la API externa
      const response = await axios.get(
        `https://api.thedogapi.com/v1/breeds/search?q=/${idRaza}`
      );
      if (!response.data) {
        return res.status(404).json({ error: 'Raza no encontrada' });
      }

      // Crear el objeto de raza con los datos de la API externa
      const apiDog = response.data;
      return res.json(apiDog);
    }

    res.json(dog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la raza' });
  }
};

module.exports = {
  getDogsById,
};
