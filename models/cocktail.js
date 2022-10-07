const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cocktailsSchema = new Schema({
    photo: [
        {
            type: String,
            validate: {
                validator: function (value) {
                    const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
                    const urlRegExp = new RegExp(urlPattern);
                    return value.match(urlRegExp);
            },
                message: props => `${props.value} is not a valid URL`
            }
        }
    ],
    label: {
        type: String,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    recipe: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Cocktail', cocktailsSchema)