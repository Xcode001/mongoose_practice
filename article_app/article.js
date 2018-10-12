const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    body: String,
    comments: [{body: String, commendDate: Date}],
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

// The first argument we pass into model will be the name of our collection
// Mongoose will lowercase the collection name and pluralrize it.

// When this code runs, an object get returned to us that we can interact with,
// to include CRUD operations
module.exports = mongoose.model('Article', articleSchema)