const Tapa = require('../models/tapa')

module.exports = {
    index,
    show
}

function index(req, res) {
    Tapa.find({}, function (err, tapas) {
        res.render('tapas/index', {tapas})
    })
}

function show(req, res) {
    Tapa.findById(req.params.id, function (err, tapa) {
        console.log(tapa)
        res.render('tapas/show', {tapa});
    })
}