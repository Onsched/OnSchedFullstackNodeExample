const express     = require('express')
const axios       = require('axios')
const querystring = require('querystring')

const keys           = require('../../config/keys')
const errorResponses = require('../../middlewares/onschedErrorResponses')


// initialize the router
const router = express.Router()


//-------------------------
// Route Handlers
//-------------------------

// POST /api/auth/initialize
router.post( '/initialize',
  (request, response, next) => {
    const params = {
      scope:         'OnSchedApi',
      grant_type:    'client_credentials',
      client_id:     keys.onschedClientID,
      client_secret: keys.onschedClientSecret
    }

    const tokenURL = `${keys.onschedIdentityURL}/connect/token`

    // querystring.stringify(params) will encode the param data
    // in application/x-www-urlencoded format, which is required
    // by the Identity Server
    axios.post( tokenURL, querystring.stringify(params) )
         .then( resp => {
           // pass the access token back to the client app
           response.send( resp.data ) || false
         })
         // if not, pass the error to the 
         // onschedErrorResponse middleware
         .catch( next )

  }

) //-- end POST /api/auth/initialize


//-------------------------------------------
// route specific error handling middleware
// error middleware must come after routes
// and all other middleware
//-------------------------------------------
router.use( errorResponses )


// export the router
module.exports = router
