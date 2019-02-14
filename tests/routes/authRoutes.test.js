const _       = require('lodash')
const request = require('supertest')

const app = require('../../app')


describe( 'Test auth routes', () => {

  describe( 'GET /auth/initialize', () => {

    test( 'should respond with an access_token', async () => {
      const response = await request( app ).get( '/auth/initialize' )

      expect( response.statusCode   ).toEqual( 200 )
      expect( _.keys(response.body) ).toContain( 'access_token' )

    })
  
  })

})
