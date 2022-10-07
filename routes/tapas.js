var express = require('express');
var router = express.Router();
const tapasCtrl = require('../controllers/tapas');

router.get('/', tapasCtrl.index);
router.get('/:id', tapasCtrl.show);

module.exports = router;
