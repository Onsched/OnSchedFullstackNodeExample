// Express server configuration
// Configuration of the app has been separated
// from the actual server initialization
// (server.js) to support testing
const express = require('express')
const morgan  = require('morgan')

const keys       = require('./config/keys')
const authRoutes = require('./routes/auth')

//----------------------
// Configuration
//----------------------
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

// if keys.isDevelopment is set, add console output
if ( keys.isDevelopment ) {
  app.use( morgan('dev') )
}


//-------------------------
// Route Handlers
//-------------------------
app.use( '/auth', authRoutes )


// home routes
app.get( '/', 
  (request, response) => {
    response.send( 'Welcome to OnSched' )

  }
)


// export the app for testing and 
// use in server.js
module.exports = app

