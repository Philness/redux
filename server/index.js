const express      = require('express')
const app          = express()
const bodyParser   = require('body-parser')
const logger       = require('morgan')
const router       = require('./router')
const mongoose     = require('mongoose')
//const socketEvents = require('./socketEvents')
const config       = require('./config/main')

// database setup
mongoose.connect(config.database)

// start the server
const server = app.listen(config.port)
console.log('Your server is running on port ' + config.port + '...')

const io = require('socket.io').listen(server)

/*socketEvents(io)*/

// setup static file location for production
 app.use(express.static(__dirname + '/public'))

// setting up basic middleware for all Express requests
app.use(logger('dev'))//log request to use API using morgan
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// enable CORS from the clien')side
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
  next()
})

console.log('Your server is running on port ' + config.port + '...')

router(app)

