const axios = require('axios')

const { ONSCHED_BASE_URL,
        getRequestHeaders } = require('./onschedApiUtils')


module.exports = {
  //-----------------------
  // HTTP Method handlers
  //-----------------------

  // Handle GET requests to the OnSched API
  performGetRequest: (api, request, response, next) => {
    // build the endpoint string
    const url = `${ONSCHED_BASE_URL}/${api}/v1${request.url}`

    // configure headers
    const config = getRequestHeaders(
                     request.session,
                     request.headers,
                     request.connection.remoteAddress
                   )

    axios.get( url, config )
         .then( onSchedResponse => {
           response.json( onSchedResponse.data )
         })
         .catch( next )

  },

  // Handle POST requests to the OnSched API
  performPostRequest: (api, request, response, next) => {
    // build the endpoint
    const url = `${ONSCHED_BASE_URL}/${api}/v1${request.url}`

    // set data to pass to post request
    const postData = request.body || {}

    const config = getRequestHeaders(
                     request.session,
                     request.headers,
                     request.connection.remoteAddress
                   )

    axios.post( url, postData, config )
         .then( onschedResponse => {
           response.json( onschedResponse.data )
         })
         .catch( next )
  },

  // Handle PUT/PATCH requests to the OnSched API
  performPutRequest: (api, request, response, next) => {
    // build the endpoint
    const url = `${ONSCHED_BASE_URL}/${api}/v1${request.url}`

    // set data to pass to post request
    const updateData = request.body || {}

    const config = getRequestHeaders(
                     request.session,
                     request.headers,
                     request.connection.remoteAddress
                   )

    axios.put( url, updateData, config )
         .then( onschedResponse => {
           response.json( onschedResponse.data )
         })
         .catch( next )
  },

  // handle DELETE requests for the OnSched API
  performDeleteRequest: (api, request, response, next) => {
    // build the url
    const url = `${ONSCHED_BASE_URL}/${api}/v1${request.url}`

    const config = getRequestHeaders(
                     request.session,
                     request.headers,
                     request.connection.remoteAddress
                   )

    axios.delete( url, config )
         .then( onschedResponse => {
           response.json( onschedResponse.data )
         })
         .catch( next )
  }

}
