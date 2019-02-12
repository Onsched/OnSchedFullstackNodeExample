// Express server configuration
// Configuration of the app has been separated
// from the actual server initialization
// (server.js) to support testing
const express = require('express')
const morgan  = require('morgan')


//----------------------
// Configuration
//----------------------
// if NODE_ENV is undefined or development, this is development
const isDevelopment = !(process.env.NODE_ENV) || 
                      process.env.NODE_ENV === 'development'


// instantiate the express application
// the app object is used to configure the
// server, listen to incoming request, and
// route them to the appropriate route handlers
const app = express()


//-----------------------
// Server Middleware
//-----------------------
// each call to app.use wires up a piece of middleware
// inside the application.  these middleware modify
// incoming requests to the app BEFORE they are sent to
// the route handlers

// if isDevelopment, add console output
if ( isDevelopment ) {
  app.use( morgan('dev') )
}


//-------------------------
// Route Handlers
//-------------------------
app.get('/', 
  (request, response) => {
    response.send( { NODE_ENV: process.env.NODE_ENV, 
                     hi: "there" } )
  }
)


// export the app for testing and 
// use in server.js
module.exports = app

