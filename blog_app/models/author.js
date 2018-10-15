 const mongoose = require('../db/mongoose')

 const authorSchema = new mongoose.Schema({
    name: String
 })

 module.exports = mongoose.model('Author', authorSchema)