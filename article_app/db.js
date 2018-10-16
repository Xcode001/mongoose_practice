const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost/test'
mongoose.connect(connectionString, {useNewUrlParser: true})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose is disconnected`)
})

mongoose.connection.on('error', (error) => {
    console.log('An Error was Thrown: ', error)
})
