const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/company', {
    useNewUrlParser: true
});

module.exports = mongoose
