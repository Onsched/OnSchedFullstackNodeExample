// server.js - this file is used to launch the Express server
// and sets up the listener on port 5000 for development
const express = require('express')
const morgan  = require('morgan')


//----------------------
// Configuration
//----------------------
// if NODE_ENV is undefined, this is development
const isDevelopment = !(process.env.NODE_ENV)

// configure the HOST & PORT which the app will 
// use to listen for incoming traffic
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 5000


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
    response.send( { hi: 'there' } )
  }
)


//-------------------------
// set up server listening
//-------------------------
app.listen( PORT, 
            () => console.log(`Listening on http://${HOST}:${PORT}`) 
)

