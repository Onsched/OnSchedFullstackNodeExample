// Set necessary configuration and headers
// for communication with the OnSchedAPI
const keys = require('../config/keys')


module.exports = {
  ONSCHED_BASE_URL: keys.onschedApiURL,
  CONSUMER_API_URL: `${keys.onschedApiURL}/consumer/v1`,


  // set the request headers in a unified format for each request
  getRequestHeaders: function( requestHeaders, remoteAddress ) {
    const headers      = requestHeaders
    const forwardedFor = requestHeaders['x-forwarded-for'] || remoteAddress

    // set the following specifically
    headers.host               = null
    headers.accept             = 'application/json'
    headers['x-forwarded-for'] = forwardedFor

    // return the combined headers
    return { headers }

  }

}

