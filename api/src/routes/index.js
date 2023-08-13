const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeDogs = require('./routeDogs');
const routeTemperaments = require('./routeTemperaments');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', routeDogs);
// router.use('/temperaments', routeTemperaments);

module.exports = router;
