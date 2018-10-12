const mongoose = require('mongoose')
mongoose.connect(
    'mongodb://localhost/destinyApp', {useNewUrlParser: true}
    )
    mongoose.connection.on('connected', () => {
        console.log('Connection to Database Successful')
    })
    mongoose.connection.on('disconnected', () => {
        console.log('Database Disconnected')
    })
    mongoose.connection.on('error', (err) => {
        console.log('A Mongoose Error Was Thrown: ', err)
    })


module.exports = mongoose