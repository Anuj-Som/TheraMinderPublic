const express = require('express')
const helmet = require('helmet')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const appConfig = require('./app.config.js')

app.use(helmet())

// Express Route File Requires
const prescribe = require('./api/prescribe.js')
const get_prescription = require('./api/get_prescription.js')

// <REQUIRES> DON'T CHANGE THIS LINE - Express route file requires will be added above here.

app.use(express.static(path.resolve(__dirname, 'src/public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Express Routing
app.use('/api/prescribe', prescribe)
app.use('/api/get/prescribe', get_prescription);
app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, 'src/public', 'index.html'));                               
  });
// <ROUTING-E> DON'T CHANGE THIS LINE - Express routing will be added above here.

// React Routing

// <ROUTING-R> DON'T CHANGE THIS LINE - React routing will be added above here.

http.createServer(app).listen(appConfig.port)

module.exports = app
