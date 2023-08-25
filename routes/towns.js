var express = require('express');
var router = express.Router();
const townController = require('../controllers/townController')

//http://localhost:3000/towns
router.get('/', townController.viewTowns);

module.exports = router;
