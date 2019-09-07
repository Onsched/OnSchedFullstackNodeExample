const axios   = require('axios')
const request = require('supertest')

const app = require('../../../app')


describe( 'Test auth routes', () => {

  describe( 'POST /auth/initialize', () => {

    test( 'should respond with initialize', async () => {
      const response = await request( app ).post( '/api/auth/initialize' )

      expect( response.statusCode ).toEqual( 200 )
      expect( response.body ).toMatchObject(
                               {
                                 initialized: true
                               }
                             )
    })
  
  })

})
