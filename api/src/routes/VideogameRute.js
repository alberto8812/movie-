const { Router } = require('express');
const {getIdvideogame} = require('../controllers/videogame/getIdVidegame');
const {getAllVideogame} = require('../controllers/videogame/getAllvideogame');
const {createVideogame} = require('../controllers/videogame/createVideogame');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/",getAllVideogame);

router.post("/create",createVideogame);



router.get("/:id", getIdvideogame);





module.exports = router;
