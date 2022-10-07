require('dotenv').config();
require('./config/database');

const Tapa = require('./models/tapa');
const Cocktail = require('./models/cocktail')
const Veggie = require('./models/veggie')

const data = require('./data')

const p1 = Tapa.deleteMany({})
const p2 = Cocktail.deleteMany({})
const p3 = Veggie.deleteMany({})
Promise.all([p1, p2, p3])
.then(function(result) {
    console.log(result)
    return Promise.all([
        Tapa.create(data.tapas),
        Cocktail.create(data.cocktails)
    ])
})
.then(process.exit)