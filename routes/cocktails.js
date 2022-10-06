var express = require('express');
var router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');

router.get('/', cocktailsCtrl.index);

module.exports = router;