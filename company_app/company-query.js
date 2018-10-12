require('./mongoose')
const Company = require('./company')

// Company.create({
//     name: "Apple",
//     founded: "April, 1, 1976",
//     active: false,
//     products: ['computers'],
//     ceo: {
//         name: 'Steve Jobs',
//         age: 21
//     }
// }, (error, addedCompany) => {
//     if(error) console.log(error)
//     else console.log(addedCompany)
// })



// Company.find(({}), (error, response) => {
//     if(error) console.log(error)
//     else console.log(response)
// })

// Company.create({
//     name: 'Google',
//     founded: 'September 4, 1998',
//     employees: 57100,
//     active: true,
//     products: ['search', 'maps', 'email'],
//     ceo: {
//         name: 'Larry Page',
//         age: 43
//     }
// }, (error, response) => {
//     if(error) console.log(error)
//     else console.log(response)
// })

// Company.updateOne({name: 'Apple'}, {$set: 
//     {name: 'Apple Inc', 
//     employees: 66000,
//      active: true,
//      products: ['computers', 'phones', 'tablets'],
//      ceo: {
//          name: 'Tim Cook',
//          age: 56
//      }
//     }}, (error, response) => {
//         if(error) console.log(error)
//         else console.log(response)
//     })

// Company.findByIdAndDelete({
//             _id: '5bbfcd07dc275366257b9b6a'
// }, (error, response) => {
//     if(error) console.log(error)
//     else console.log(response)
// })

// Company.find(({}), (error, response) => {
//     if(error) console.log(error)
//     else console.log(response)
// })

Company.find(({name: 'Google'}), (error, response) => {
    if (error) console.log(error)
    else console.log(response[0].employees)
})

