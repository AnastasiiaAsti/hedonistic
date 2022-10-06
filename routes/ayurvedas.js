var express = require('express');
var router = express.Router();
const ayurvedasCtrl = require('../controllers/ayurvedas');

router.get('/', ayurvedasCtrl.index);

module.exports = router;