const request = require('supertest')

const app = require('../../app')


describe.skip( 'Test base routes', () => {

  describe( 'GET /', () => {

    test( 'should respond with success', async () => {
      const response = await request( app ).get( '/' )

      expect( response.statusCode ).toEqual( 200  )
      expect( response.text       ).toEqual( "Welcome to OnSched" )
    })

  })

})
