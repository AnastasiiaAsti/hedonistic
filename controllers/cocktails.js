const Cocktail = require('../models/cocktail')

module.exports = {
    index,
    show
}

function index(req, res) {
    Cocktail.find({}, function (err, cocktails) {
        res.render('cocktails/index', {cocktails})
    })
}

function show(req, res) {
    Cocktail.findById(req.params.id, function (err, cocktail) {
        res.render('cocktails/show', { cocktail });
    })
}