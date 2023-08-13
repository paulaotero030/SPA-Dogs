const { Dog, Temperament } = require('../db'); // Importa los modelos

async function createDog(req, res) {
  const { image, name, height, weight, years_of_life, temperaments } = req.body;

  try {
    const newDog = await Dog.create({
      image,
      name,
      height,
      weight,
      years_of_life,
    });

    // Relacionar el perro con los temperamentos indicados
    if (temperaments && temperaments.length > 0) {
      const foundTemperaments = await Temperament.findAll({
        where: {
          nombre: temperaments,
        },
      });

      await newDog.setTemperaments(foundTemperaments);
    }

    return res.status(201).json(newDog);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'Ocurrió un error en el servidor.' });
  }
}

module.exports = {
  createDog,
};
