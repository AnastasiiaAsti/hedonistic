require('dotenv').config();
require('./config/database');

const Tapa = require('./models/tapa');
const Cocktail = require('./models/cocktail')
const Veggie = require('./models/veggie')
const Grandma = require('./models/grandma')
const Soup = require('./models/soup')

const data = require('./data')

const p1 = Tapa.deleteMany({})
const p2 = Cocktail.deleteMany({})
const p3 = Veggie.deleteMany({})
const p4 = Grandma.deleteMany({})
const p5 = Soup.deleteMany({})
Promise.all([p1, p2, p3, p4, p5])
.then(function(result) {
    console.log(result)
    return Promise.all([
        Tapa.create(data.tapas),
        Cocktail.create(data.cocktails),
        Veggie.create(data.veggies),
        Grandma.create(data.grandmas),
        Soup.create(data.soups)
    ])
})
.then(process.exit)