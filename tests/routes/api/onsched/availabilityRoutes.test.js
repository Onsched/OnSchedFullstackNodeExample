const axios   = require('axios')
const request = require('supertest')

const app = require( '../../../../app')


describe( 'Test availability routes', () => {

  describe( 'GET /api/onsched/availability/:serviceId/:startDate/:endDate', () => {

    beforeEach( () => {
      let mockedResponse = {
        "url": "/consumer/v1/availability/5/2019-02-22/2019-02-23",
        "object": "availableTimes",
        "businessName": "Burlington Medical Center",
        "serviceId": "5",
        "serviceName": "Assessment",
        "serviceDescription": "",
        "serviceDuration": 30,
        "resourceId": "33",
        "resourceName": "Janice Joplin",
        "resourceDescription": "Janis Lyn Joplin (January 19, 1943 – October 4, 1970), nicknamed \"Pearl\", was an American rock, soul and blues singer and songwriter, and one of the most successful and widely-known female rock stars of her era.",
        "tzRequested": -300,
        "firstAvailableDate": "",
        "availableDays": [],
        "availableTimes": [
          {
            "startDateTime": "2019-02-22T11:00:00-05:00",
            "endDateTime": "2019-02-22T11:30:00-05:00",
            "date": "2019-02-22",
            "time": 1100,
            "displayTime": "11:00 AM",
            "duration": 30,
            "allowableBookings": 1,
            "availableBookings": 1,
            "resourceId": "33"
          },
          {
            "startDateTime": "2019-02-22T11:30:00-05:00",
            "endDateTime": "2019-02-22T12:00:00-05:00",
            "date": "2019-02-22",
            "time": 1130,
            "displayTime": "11:30 AM",
            "duration": 30,
            "allowableBookings": 1,
            "availableBookings": 1,
            "resourceId": "33"
          },
          {
            "startDateTime": "2019-02-22T12:00:00-05:00",
            "endDateTime": "2019-02-22T12:30:00-05:00",
            "date": "2019-02-22",
            "time": 1200,
            "displayTime": "12:00 PM",
            "duration": 30,
            "allowableBookings": 1,
            "availableBookings": 1,
            "resourceId": "33"
          }
        ]
      }

      // mock the axios.get method inside /api/onsched/availability
      axios.get = jest.fn()

      axios.get
           .mockReturnValue( Promise.resolve( { data: mockedResponse } ) )
    })

    test( 'should respond with availabilityData', async () => {
      const serviceId = 5
      const startDate = '2019-02-22'
      const endDate   = '2019-02-23'

      const response =
              await request( app ).get( `/api/onsched/availability/${serviceId}/${startDate}/${endDate}`,
                                        { headers: { authorization: 'a_token' } } )

      expect( response.statusCode ).toEqual( 200 )
      expect( response.body.data  ).toMatchObject(
                                     {
                                       url:          "/consumer/v1/availability/5/2019-02-22/2019-02-23",
                                       object:       "availableTimes",
                                       businessName: "Burlington Medical Center",
                                       serviceId:    "5",
                                       resourceId:   "33"
                                     }
                                   )
    })

  })

})
