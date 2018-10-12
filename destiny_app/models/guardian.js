const mongoose = require('../db/mongoose')

const guardianSchema = mongoose.Schema({
    name: {type: String, required: true},
    class: {type: String, required: true},
    subClass: [
        {
            sub: String, level: {
            type: Number,
            default: 5
            }
        }
    ],
    intelligence: {type: Number, default: 100},
    experience_level: {type: Number, default: 10},
    weapons: [{
        type: String,
        element: String,
        damage: Number
    }]
})

module.exports = mongoose.model('Guardian', guardianSchema)