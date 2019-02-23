const proxy = require('http-proxy-middleware')


module.exports = function( app ) {
  // configure routes which need proxy to backend server
  // in development
  // these setting are not used in production because
  // the entire application will run on one server and port

  // match anything at the top level under /api
  app.use( proxy('/api/*',       { target: 'http://localhost:5000' } ) )
  // match anything below /api/auth/** (eg: /api/auth/**)
  app.use( proxy('/api/auth',    { target: 'http://localhost:5000' } ) )
  // match anything below /api/onsched (eg: /api/onsched/**)
  app.use( proxy('/api/onsched', { target: 'http://localhost:5000' } ) )
}
