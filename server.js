// server.js - this file is used to launch the Express server
// and sets up the listener on port 5000 for development
const express = require('express')


// configure the PORT which the app will use to 
// listen for incoming traffic
const PORT = process.env.PORT || 5000


// instantiate the express application
// the app object is used to configure the
// server, listen to incoming request, and
// route them to the appropriate route handlers
const app = express()


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
            () => console.log(`Listening on http://localhost:${PORT}`) 
)

