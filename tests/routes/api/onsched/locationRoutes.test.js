const axios   = require('axios')
const request = require('supertest')

const app = require( '../../../../app')


describe( 'Test location routes', () => {

  describe( 'GET /api/onsched/locations', () => {

    test( 'should respond with all locations for the company', async () =>{
      let mockResponse = {
        "object": "business",
        "url": "/consumer/v1/locations",
        "hasMore": false,
        "count": 2,
        "total": 2,
        "data": [
          "location_1_data_object",
          "location_2_data_object"
        ]
      }

      // mock the axios.get method inside /api/onsched/locations/:locationId
      axios.get = jest.fn()

      axios.get
           .mockReturnValue( Promise.resolve( { data: mockResponse } ) )


      const response = await request( app ).get( `/api/onsched/locations`,
                                                 { headers: { authorization: 'a_token' } } )

      expect( response.statusCode ).toEqual( 200 )
      expect( response.body.data  ).toMatchObject(
        {
          object:  "business",
          url:     "/consumer/v1/locations",
          hasMore: false,
          count:   2,
          total:   2,
          data:    [
            "location_1_data_object",
            "location_2_data_object"
          ]
        }
      )

    })

  })

  describe( 'GET /api/onsched/locations/:locationId', () => {

    test( 'should respond with location data for one location', async () => {
      let mockResponse = {
        "object": "location",
        "id": "e4d61bd8-cdf3-4fc9-887e-2320dce062e0",
        "friendlyId": "burlingtonmedical",
        "companyId": "5e737c4b-379f-481d-b075-1c7cab1ac822",
        "companyName": "Burlington Medical Center",
        "name": "Burlington Medical Center",
        "email": "john@example.com",
        "website": "http://www.burlingtonmedical.ca",
        "logo": "",
        "timezoneId": "Eastern Standard Time",
        "timezoneOffset": -300,
        "address": {
          "addressLine1": "121 Main St",
          "addressLine2": "",
          "city": "Burlington",
          "state": "ON",
          "country": "CA",
          "postalCode": "L7L 3Z2"
        },
        "businessHolidays": [
          {
            "holidayName": "New Year's Day",
            "businessClosed": true
          },
          {
            "holidayName": "Canada Day",
            "businessClosed": true
          },
          {
            "holidayName": "Labour Day",
            "businessClosed": true
          },
          {
            "holidayName": "Thanksgiving Day",
            "businessClosed": true
          },
          {
            "holidayName": "Christmas Day",
            "businessClosed": true
          }
        ],
        "settings": {
          "object": "onlineSettings",
          "companyId": "5e737c4b-379f-481d-b075-1c7cab1ac822",
          "enabled": false
        }
      }

      // mock the axios.get method inside /api/onsched/locations/:locationId
      axios.get = jest.fn()

      axios.get
           .mockReturnValue( Promise.resolve( { data: mockResponse } ) )


      const locationId = 'e4d61bd8-cdf3-4fc9-887e-2320dce062e0'

      const response =
              await request( app ).get( `/api/onsched/locations/${locationId}`,
                                        { headers: { authorization: 'a_token' } } )

      expect( response.statusCode ).toEqual( 200 )
      expect( response.body.data  ).toMatchObject(
                                     {
                                       object:      "location",
                                       id:          "e4d61bd8-cdf3-4fc9-887e-2320dce062e0",
                                       friendlyId:  "burlingtonmedical",
                                       companyId:   "5e737c4b-379f-481d-b075-1c7cab1ac822",
                                       companyName: "Burlington Medical Center",
                                       name:        "Burlington Medical Center",
                                     }
                                   )
    })

  })

})
