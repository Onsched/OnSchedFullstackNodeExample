const keys               = require('../config/keys')
const { getAccessToken } = require('./accessToken')


module.exports = {
  ONSCHED_BASE_URL: keys.onschedApiURL,

  getRequestHeaders: (requestSession, requestHeaders, remoteAddress) => {
    const accessToken  = getAccessToken(requestSession)
    const headers      = requestHeaders
    const forwardedFor = requestHeaders['x-forwarded-for'] || remoteAddress

    // set the following specifically
    headers.host               = null
    headers.authorization      = `Bearer ${accessToken}`
    headers.accept             = 'application/json'
    headers['x-forwarded-for'] = forwardedFor

    // return the combined headers
    return { headers }
  }

}
