var express = require('express');
var router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');

router.get('/', cocktailsCtrl.index);
router.get('/:id', cocktailsCtrl.show);

module.exports = router;