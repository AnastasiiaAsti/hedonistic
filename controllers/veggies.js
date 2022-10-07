const Veggie = require('../models/veggie')

module.exports = {
    index
}

function index(req, res) {
    Veggie.find({}, function (err, veggies) {
        res.render('veggies/index', {veggies})
    })
}