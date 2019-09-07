// Access token support functions

module.exports = {

  getAccessToken: function( session ) {
    let accessToken = ''

    if ( session && session.tokenset ) {
      accessToken = session.tokenset.access_token
    }

    return accessToken
  }

}
