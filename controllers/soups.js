const Soup = require('../models/soup')

module.exports = {
    index
}

function index(req, res) {
    Soup.find({}, function (err, soups) {
        res.render('soups/index', {soups})
    })
}