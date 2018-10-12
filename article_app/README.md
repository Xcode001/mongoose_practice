# Mongoose

Mongoose is a wrapper that allows use to interface with our mongoDB server using plain JavaScript.

Rather than writing our mongoDB queries manually, we use mongoose instead.

First, we'll install mongoose

```bash

npm i --save mongoose

```


Then we can set up our db config file

```bash
touch db.js
```

Then we can set up our connection

```js

const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost/test'
mongoose.connect(connectionString)

```

We can also set up connection event listeners

```js

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to: ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose is connected to ${connectionString}`)
})

mongoose.connection.on('error', (error) => {
    console.log('An error was thrown: ', error)
})
```

