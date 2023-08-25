var express = require('express');
var router = express.Router();
const placeController = require('../controllers/placeController')

//http://localhost:3000/places
router.get('/', placeController.viewPlaces);


module.exports = router;