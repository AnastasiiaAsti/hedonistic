var express = require('express');
var router = express.Router();
const grandmassCtrl = require('../controllers/grandmas');

router.get('/', grandmassCtrl.index);
router.get('/:id', grandmassCtrl.show);

module.exports = router;