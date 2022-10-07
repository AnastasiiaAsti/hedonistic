const Tapa = require('../models/tapa')

module.exports = {
    index
}

function index(req, res) {
    Tapa.find({}, function (err, tapas) {
        res.render('tapas/index', {tapas})
    })
}