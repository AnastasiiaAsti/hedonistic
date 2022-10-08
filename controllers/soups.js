const Soup = require('../models/soup')

module.exports = {
    index,
    show
}

function index(req, res) {
    Soup.find({}, function (err, soups) {
        res.render('soups/index', {soups})
    })
}

function show(req, res) {
    Soup.findById(req.params.id, function (err, soup) {
        res.render('soups/show', { soup });
    })
}