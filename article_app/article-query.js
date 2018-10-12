require('./db')
// When we require the file, we run the file here.


const Article = require('./article')

// Create something in mongoDB
// Article.create({title: 'Old man in the sea', author: 'Hems'}, (err, createdArticle) => {
//     if(err)console.log('Error: ', err)
//     else console.log(createdArticle)
// })

// Read Data from mongoDB using our model

// Article.find({
//     author: 'Hems'
// }, (err, foundArticle) => {
//     if(err) console.log('An Error was Thrown: ', err)
//     else console.log('Here\'s your articles: ',  foundArticle)
// })

// Article.updateOne({author: 'Hems'}, {$set: {author: 'Hemmingway Boss'}}, {new: true}, (err, updatedArticle) => {
//     if(err) console.log('Error', err)
//     else console.log(updatedArticle)
// })

// Article.deleteOne({author: 'Hemmingway Boss'}, (err, response) => {
//     if(err) console.log('Error', err)
//     else console.log(response)
// })

Article.find({}, (err, response) => {
    if(err) console.log('Error', err)
    else console.log(response)
})


