const Cocktail = require('../models/cocktail')

module.exports = {
    index
}

function index(req, res) {
    Cocktail.find({}, function (err, cocktails) {
        res.render('cocktails/index', {cocktails})
    })
}