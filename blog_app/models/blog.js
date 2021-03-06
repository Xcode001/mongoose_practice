const mongoose = require('../db/mongoose')

const articleSchema = new mongoose.Schema({
    title: String,
    body: String,
    authorId: String
})

module.exports = mongoose.model('Article', articleSchema)