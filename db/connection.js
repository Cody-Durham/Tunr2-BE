require('dotenv').config()

const mongoose = require('mongoose') 

const {MONGODB_URI} = process.env;

// connection
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})


// messages
mongoose.connection
.on('open', () => console.log('connected to mongo'))
.on('close', () => console.log('disconnected to mongo'))
.on('error', () => console.log('error'))

module.exports = mongoose