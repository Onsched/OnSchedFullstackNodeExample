const axios   = require('axios')
const request = require('supertest')

const app = require('../../app')


describe( 'Test auth routes', () => {

  describe( 'GET /auth/initialize', () => {

    beforeEach( () => {
      let data = {
        "access_token": "long_encrypted_token_string",
        "expires_in":   3600,
        "token_type":   "Bearer"
      }

      // mock the axios post method inside /auth/initialize
      axios.post = jest.fn()

      axios.post
           .mockReturnValue( Promise.resolve( { data: data } ) )
    })

    test( 'should respond with an access_token', async () => {
      const response = await request( app ).get( '/auth/initialize' )

      expect( response.statusCode ).toEqual( 200 )
      expect( response.body ).toMatchObject(
                               {
                                 access_token: 'long_encrypted_token_string',
                                 expires_in:   3600,
                                 token_type:   'Bearer'
                               }
                             )
    })
  
  })

})
