var express = require('express');
var router = express.Router();
const soupsCtrl = require('../controllers/soups');

router.get('/', soupsCtrl.index);
router.get('/:id', soupsCtrl.show);

module.exports = router;