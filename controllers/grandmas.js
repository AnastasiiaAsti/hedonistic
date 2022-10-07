const Grandma = require('../models/grandma')

module.exports = {
    index
}

function index(req, res) {
    Grandma.find({}, function (err, grandmas) {
        res.render('grandmas/index', {grandmas})
    })
}