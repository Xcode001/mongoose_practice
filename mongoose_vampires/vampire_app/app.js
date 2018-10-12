// 1. Require your node modules
const mongoose = require('mongoose')
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire')
const vampires = require('./populateVampires')
// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampire'
// 4. Open your mongoose connection
mongoose.connect(connectionString, {useNewUrlParser: true})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.insertMany(vampires, (err, response) => {
//     if(err) console.log('An Error was thrown: ', err)
//     else console.log(response)
// })
// ### Add some new vampire data

// Vampire.create({
//     name: "Daniel",
//     hair_color: "blonde",
//     eye_color: "Green",
//     dob: "Jan 30, 1985",
//     loves: ['coding', 'friday morning tacos'],
//     location: "Dallas, TX",
//     gender: 'm',
//     victims: 1

// }, (error, response) => {
//     if(error) console.log(error)
//     else console.log(response)
// })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender: 'f'}, (error, response) => {
//     if(error) console.log(error)
//     else console.log(response)
// })
// Vampire.find({
//     victims: {$gt: 500}
// }, (error, response) => {
//     if(error) console.log(error)
//     else console.log(response)
// })

Vampire.find({
    victims: {$ne: 210234}
}, (error, response) => {
    if(error) console.log(error)
    else console.log(response)
})
/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
