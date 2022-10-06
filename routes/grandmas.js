var express = require('express');
var router = express.Router();
const grandmassCtrl = require('../controllers/grandmas');

router.get('/', grandmassCtrl.index);

module.exports = router;