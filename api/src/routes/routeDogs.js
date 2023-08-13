const { Router } = require('express');

const router = Router();

//Importar los controllers

const { getDogsName } = require('../controllers/getDogsName');
const { createDog } = require('../controllers/createDogs');

// Creo una ruta para cada controllers

router.get('/name', getDogsName);
router.post('/', createDog);

module.exports = router;
