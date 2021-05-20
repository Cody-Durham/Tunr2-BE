require('dotenv').config()
const express = require('express') 

//import the connection
const mongoose = require('./db/connection')

const morgan = require('morgan') 
const cors = require('cors') 
const app = express()
const {PORT=7777} = process.env

app.get('/', (req, res) => res.send('hello, this is working'))


app.listen(PORT, () => console.log(`listening in on port ${PORT}`))