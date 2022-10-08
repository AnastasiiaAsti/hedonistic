var express = require('express');
var router = express.Router();
const veggiesCtrl = require('../controllers/veggies');

router.get('/', veggiesCtrl.index);
router.get('/:id', veggiesCtrl.show);

module.exports = router;