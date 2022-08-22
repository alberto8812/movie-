const { Router } = require('express');
const { getIpVideogame, getIdvideogame,createVideogame } = require('../controllers/VideogameAllControler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/",getIpVideogame);

router.post("/create",createVideogame);



router.get("/:id", getIdvideogame);





module.exports = router;
