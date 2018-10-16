const mongoose = require('../db/mongoose')
const Blog = require('./blog')
const authorSchema = new mongoose.Schema({
    name: String,
    blogs: [Blog.schema]
 })

 module.exports = mongoose.model('Author', authorSchema)