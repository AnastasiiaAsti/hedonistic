const Grandma = require('../models/grandma')

module.exports = {
    index,
    show
}

function index(req, res) {
    Grandma.find({}, function (err, grandmas) {
        res.render('grandmas/index', {grandmas})
    })
}

function show(req, res) {
    Grandma.findById(req.params.id, function (err, grandma) {
        res.render('grandmas/show', { grandma });
    })
}