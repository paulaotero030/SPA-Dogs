const axios = require('axios');
const { Op } = require('sequelize');
const Dog = require('../db'); // Asumiendo que el modelo se llama dog y está exportado desde '../db'

const getDogsName = async (req, res) => {
  const { raza_perro } = req.query;
  try {
    const dogsFromApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${raza_perro}`
    );
    // Reemplaza 'API_URL' con la URL real de la API de perros
    const dogsFromDb = await Dog.findAll({
      where: { name: { [Op.iLike]: `%${raza_perro}%` } },
    });

    if (dogsFromApi.data.length === 0 && dogsFromDb.data.length === 0) {
      return res.status(400).json({ error: 'No existe esa raza de perro' });
    }

    const mergedDogs = [...dogsFromApi.data, ...dogsFromDb.data]; // Combinar resultados de API y base de datos
    return res.status(200).json(mergedDogs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  getDogsName,
};
// const { Op } = require('sequelize');
// const Dog = require('../models/Dog');
// const axios = require('axios');

// async function getDogsName(req, res) {
//   const { name } = req.query;

//   try {
//     const apiResponse = await axios.get(
//       `https://api.thedogapi.com/v1/breeds/search?q=${encodeURIComponent(name)}`
//     );

//     const dogsFromAPI = apiResponse.data;

//     const dogsFromDB = await Dog.findAll({
//       where: {
//         nombre: {
//           [Op.iLike]: `%${name}%`,
//         },
//       },
//     });

//     if (dogsFromAPI.length === 0) {
//       return res
//         .status(404)
//         .json({ message: 'No se encontraron razas de perros.' });
//     }

//     const combinedResults = [...dogsFromAPI];

//     return res.status(200).json(combinedResults);
//   } catch (error) {
//     console.error(error);
//     return res
//       .status(500)
//       .json({ message: 'Ocurrió un error en el servidor.' });
//   }
// }

// module.exports = {
//   getDogsName,
// };
