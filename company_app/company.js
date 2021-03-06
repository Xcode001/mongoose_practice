const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    name: {type: String, required: true},
    founded: Date,
    employees: Number,
    active: Boolean,
    products: [String],
    ceo: {
        name: String,
        age: Number
    }
})

module.exports = mongoose.model('company', companySchema)