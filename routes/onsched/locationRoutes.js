// return location data
const express = require('express')
const axios   = require('axios')

const { CONSUMER_API_URL,
        getRequestHeaders } = require('../../utils/onschedApiUtils')

// initialize router
const router = express.Router()


//------------------
// Route Handlers
//------------------

// list locations
// required headers:
//    Authorization:  "Bearer <the access token>" 
//        A valid access token is required by the API
// 
// option query parameters
//    name                format    description
//    ----------          -------   ------------
//    name:               string    location name (full or partial) to filter on
//    offset:             integer   starting row of page, default to 0
//    limit:              integer   page limit, default 20, max 100
//
// GET '/api/onsched/locations'
router.get( '/', 
  (request, response, next) => {
    const locationsURL = `${CONSUMER_API_URL}/locations`

    // configure headers
    const config = getRequestHeaders( 
                     request.headers, 
                     request.connection.remoteAddress 
                   )


    // submit to OnSched API endpoint
    axios.get( locationsURL, config )
         // if response was successful, relay the response
         .then( onschedResponse => {
           response.json( { data: onschedResponse.data } )
         })
         // if not, pass the error to the
         // onschedErrorResponse middleware
         .catch( next )

  }

) //-- end GET /api/onsched/locations


// GET location by business location id
// required headers:
//    Authorization:  "Bearer <the access token>" 
//        A valid access token is required by the API
//
// required params:
//    id:   The business location id to search
// 
// GET '/api/onsched/locations/:id'
router.get( '/:id', 
  (request, response, next) => {
    const locationId = request.params.id

    const locationsURL = `${CONSUMER_API_URL}/locations/${locationId}`

    // configure headers
    const config = getRequestHeaders( 
                     request.headers, 
                     request.connection.remoteAddress 
                   )

    
    // submit to OnSched API endpoint
    axios.get( locationsURL, config )
         // if response was successful, relay the response
         .then( onschedResponse => {
           response.json( { data: onschedResponse.data } )
         })
         // if not, pass the error to the
         // onschedErrorResponse middleware
         .catch( next )

  }

) //-- end GET /api/onsched/locations/:id


module.exports = router

