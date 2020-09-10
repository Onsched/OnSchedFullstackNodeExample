// server.js - this file is used to launch the
// Express server and sets up the listener on
// http://localhost:5000 for development
const https = require('https')
const fs    = require('fs')

const app  = require('./app')
const keys = require('./config/keys')

// configure the app to listen for incoming
// traffic on HOST and PORT
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 5000


//-------------------------
// set up server listening
//-------------------------
if (keys.isDevelopment) {
  https.createServer(
          {
            key:  fs.readFileSync('server.key'),
            cert: fs.readFileSync('server.cert')
          },
          app
        )
        .listen( PORT,
                 () => console.log(`Listening on https://${HOST}:${PORT}`)
        )
}
else {
  app.listen( PORT,
              () => console.log(`Listening on http://${HOST}:${PORT}`)
     )
}
