const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const { readdirSync } = require('fs')
require('dotenv').config()


//This is the app
const app = express()

//This connects to the database
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
.then(()=>console.log('DB Connected.'))
.catch(err=>console.log(`DB CONNECTION ERROR ${err}`))

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.json({ limit:'2mb' }))
app.use(cors())

//Routes Middleware
readdirSync('./routes').map((r)=>app.use('/api', require('./routes/' + r)))

//PORT
const port = process.env.PORT || 8000

app.listen(port, ()=>console.log(`The Matrix receives you on port ${port}`))