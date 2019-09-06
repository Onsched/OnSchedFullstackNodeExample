// server.js - this file is used to run the server
// it sets up the listener on port 5000

const app = require('./app')


// configure the app to listen for incoming
// traffic on HOST and PORT
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 5000


//-------------------------
// set up server listening
//-------------------------
app.listen( PORT,
            () => console.log(`Listening on http://${HOST}:${PORT}`)
)
