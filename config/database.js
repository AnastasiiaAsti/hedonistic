const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/flights')

//shortcut to mongoose.connection object
const db = mongoose.connection
	
db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})