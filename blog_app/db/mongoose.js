const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || `mongodb://localhost/blogapp`

mongoose.connect(connectionString, {useNewUrlParser: true})

mongoose.connection.on('connection', () => {
    console.log(`Mongoose connected successfully to ${connectionString}`)
})

mongoose.connection.on('error', (error) => {
    console.log(`A Mongoose error was thrown: ${error}`)
})

mongoose.connection.on('disconnect', () => {
    console.log('Disconnection Successful')
})

module.exports = mongoose