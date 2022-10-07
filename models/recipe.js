const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
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
    preparation: {
        type: String,
        required: true
    },
    stepOne: {
        type: String,
        required: true
    },
    stepTwo: {
        type: String,
        required: true
    },
    stepThree: {
        type: String,
        required: true
    },
    stepFour: {
        type: String,
        required: true
    },
    stepFive: {
        type: String,
        required: true
    },
    fullRecipe: {
        type: String,
    }

})

module.exports = mongoose.model('Recipe', recipeSchema)