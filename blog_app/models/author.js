 const mongoose = require('../db/mongoose')

 const authorSchema = mongoose.Schema({
    name: String
 })

 module.exports = mongoose.model('Author', authorSchema)