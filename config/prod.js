
module.exports = {
  // your OnSched client credentials
  onschedClientID:     process.env.ONSCHED_CLIENT_ID,
  onschedClientSecret: process.env.ONSCHED_CLIENT_SECRET,
  
  // OnSched OpenID Connect URL
  onschedIdentityURL: process.env.ONSCHED_IDENTITY_URL,

  // the cookie key will be a random string used to encrypt
  // session storage
  cookieKey: process.env.ONSCHED_COOKIE_KEY

}

