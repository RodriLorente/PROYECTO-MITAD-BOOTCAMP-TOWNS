var express = require('express');
var router = express.Router();
const townController = require('../controllers/townController');
const multer = require('../middlewares/multer');

//http://localhost:3000/towns
router.get('/', townController.viewTowns);

//2.- Ruta para ver el formulario de creación de Localidades
//http://localhost:3000/towns/createTown
router.get('/createTown', townController.viewCreateTown);


//3.- método post del formulario de creación de localidades
//misma ruta que el anterior (son métodos diferentes)
router.post('/createTown', multer("towns"), townController.postNewTown)


//4.- Dirige a la vista de una sola localidad
//http://localhost:3000/towns/oneTown/:id_town

router.get('/oneTown/:id_town', townController.viewOneTown);

module.exports = router;
