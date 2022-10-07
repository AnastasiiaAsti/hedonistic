require('dotenv').config();
require('./config/database');

const Tapa = require('./models/tapa')

const data = require('./data')

const p1 = Tapa.deleteMany({})
Promise.all([p1])
.then(function(result) {
    console.log(result)
    return Promise.all([
        Tapa.create(data.tapas)
    ])
})
.then(process.exit)