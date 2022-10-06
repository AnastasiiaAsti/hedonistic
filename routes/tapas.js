var express = require('express');
var router = express.Router();
const tapasCtrl = require('../controllers/tapas');

router.get('/', tapasCtrl.index);

module.exports = router;