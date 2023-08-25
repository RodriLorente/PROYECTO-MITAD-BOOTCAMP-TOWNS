var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();


//http://localhost:3000
router.get('/', indexController.viewIndex);


module.exports = router;
