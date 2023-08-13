// // const { BASE_URL } = process.env;
// // Importar el módulo axios
// const axios = require('axios');

// // Controlador para la ruta '/dogs'
// const getDogs = async (req, res) => {
//   try {
//     const { raza_perro } = req.query;

//     // Comprobar si el parámetro 'raza_perro' fue proporcionado
//     if (!raza_perro) {
//       return res.status(400).json({
//         message: 'Por favor, proporcione el parámetro "raza_perro" en la URL.',
//       });
//     }

//     // Hacer la solicitud GET al endpoint con la raza de perro proporcionada
//     const response = await axios.get(
//       `https://api.thedogapi.com/v1/breeds/search?q=${raza_perro}`
//     );

//     // Obtener el arreglo de objetos de las razas de perros
//     const dogs = response.data;

//     // Devolver el arreglo de objetos como respuesta
//     return res.status(200).json(dogs);
//   } catch (error) {
//     // En caso de error, devolver una respuesta con el código de estado 500 y el mensaje de error
//     return res
//       .status(500)
//       .json({ message: 'Ocurrió un error al obtener las razas de perros.' });
//   }
// };

// // Exportar el controlador
// module.exports = {
//   getDogs,
// };

// module.exports = getDogs;
