const mongoose = require('mongoose')

const fruitSchema = mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
})

module.exports = mongoose.model('Fruit', fruitSchema)