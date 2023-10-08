const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

const connectDB = require('./server/database/connection')

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 9999

// log requests
app.use(morgan('tiny'))

// mongodb connection string
connectDB()

// parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}))

// set view engine
app.set('view engine','ejs')
// app.set('views', path.resolve(__dirname,'views/ejs'))

// // load assests
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

app.use('/', require('./server/routes/router'))


app.listen(PORT,() =>{console.log(`server is running on http://localhost:${PORT}`)})