var express = require('express');
var router = express.Router();
const placeController = require('../controllers/placeController');
const multer = require('../middlewares/multer');



//2.- Endpoint para borrado de la BD de los lugares emblemáticos
//http://localhost:3000/places/deletePlaces/:id_place

router.get('/deletePlaces/:id_place', placeController.deletePlaces);

//3.- Creación de un nuevo lugar emblemático en una vista aparte
//http://localhost:3000/places/createNewPlace/:id_town

router.get('/createNewPlace/:id_town', placeController.getNewPlace);

//4.- Metodo post de formulario de creación de punto de interés en vista aparte.
//misma ruta, distinto método

router.post('/createNewPlace/:id_town', multer("places"), placeController.postNewPlace);

//5.-get del formulario de edición de los lugares emblemáticos
//http://localhost:3000/places/editPlace/:id_place
router.get('/editPlace/:id_place', placeController.editPlace);

//6.- post del formulario de edicion de los lugares emblemáticos
//http://localhost:3000/places/editPlace/:id_place
router.post('/editPlace/:id_place', placeController.postEditPlace);


module.exports = router;