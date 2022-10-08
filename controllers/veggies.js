const Veggie = require('../models/veggie')

module.exports = {
    index,
    show
}

function index(req, res) {
    Veggie.find({}, function (err, veggies) {
        res.render('veggies/index', {veggies})
    })
}

function show(req, res) {
    Veggie.findById(req.params.id, function (err, veggie) {
        console.log(veggie)
        res.render('veggies/show', {veggie});
    })
}