// Set necessary configuration and headers
// for communication with the OnSchedAPI
const keys               = require('../config/keys')
const { getAccessToken } = require('./accessToken')


module.exports = {
  ONSCHED_BASE_URL: keys.onschedApiURL,

  // set the request headers in a unified format for each request
  getRequestHeaders: (requestSession, requestHeaders, remoteAddress) => {
    const accessToken  = getAccessToken(requestSession)
    const headers      = requestHeaders
    const forwardedFor = requestHeaders['x-forwarded-for'] || remoteAddress

    // set the following specifically
    headers.authorization      = `Bearer ${accessToken}`
    headers.accept             = 'application/json'
    headers['x-forwarded-for'] = forwardedFor

    // return the combined headers
    return { headers }
  }

}
