const axios   = require('axios')
const request = require('supertest')

const app = require('../../../../app')


describe( 'Test appointment routes', () => {

  describe( 'POST /api/onsched/appointments', () => {

    test( 'should create a reservation and return the reservation', async () => {
      let mockResponse = {
        "object": "appointment",
        "id": "296151",
        "locationId": "e4d61bd8-cdf3-4fc9-887e-2320dce062e0",
        "businessName": "Burlington Medical Center",
        "calendarId": "2",
        "serviceId": "5",
        "serviceName": "Assessment",
        "resourceId": "33",
        "resourceName": "Janice Joplin",
        "customerId": "",
        "rescheduledId": "",
        "createDate": "2019-02-22T00:09:19Z",
        "startDateTime": "2019-02-22T11:30:00-05:00",
        "endDateTime": "2019-02-22T12:00:00-05:00",
        "date": "2/22/2019",
        "time": 1130,
        "duration": 30,
        "timezone": -300,
        "status": "IN",
        "confirmationNumber": "Z151692",
        "confirmed": false,
        "email": "71.34.152.65",
        "lastModifiedOn": "2019-02-22T00:09:19Z",
        "lastModifiedBy": ""
      }

      axios.post = jest.fn()

      axios.post
        .mockReturnValue( Promise.resolve( { data: mockResponse } ) )

      appointmentData = {
                          "serviceId":"5",
                          "resourceId":"33",
                          "startDateTime":"2019-02-22T11:30:00-5:00",
                          "endDateTime":"2019-02-22T12:00:00-5:00"
                        }


      const response =
              await request( app ).post( `/api/onsched/appointments`,
                                         appointmentData )

      expect( response.statusCode ).toEqual( 200 )
      expect( response.body  ).toMatchObject(
                                 {
                                   "object": "appointment",
                                   "id": "296151",
                                   "locationId": "e4d61bd8-cdf3-4fc9-887e-2320dce062e0",
                                   "businessName": "Burlington Medical Center",
                                   "calendarId": "2",
                                   "serviceId": "5",
                                   "serviceName": "Assessment",
                                   "resourceId": "33",
                                   "resourceName": "Janice Joplin",
                                   "customerId": "",
                                   "rescheduledId": "",
                                   "createDate": "2019-02-22T00:09:19Z",
                                   "startDateTime": "2019-02-22T11:30:00-05:00",
                                   "endDateTime": "2019-02-22T12:00:00-05:00",
                                   "timezone": -300,
                                   "status": "IN",
                                   "confirmationNumber": "Z151692",
                                   "confirmed": false,
                                 }
                               )
    })

  })

  describe( 'PATCH /api/onsched/appointments/:reservationId/book', () => {

    test( 'should finalize a reservation and return the booking info', async () => {
      let mockResponse = {
        "object": "appointment",
        "id": "296151",
        "locationId": "e4d61bd8-cdf3-4fc9-887e-2320dce062e0",
        "businessName": "Burlington Medical Center",
        "calendarId": "2",
        "serviceId": "5",
        "serviceName": "Assessment",
        "resourceId": "33",
        "resourceName": "Janice Joplin",
        "customerId": "54549",
        "rescheduledId": "",
        "createDate": "2019-02-22T00:09:19Z",
        "startDateTime": "2019-02-22T11:30:00-05:00",
        "endDateTime": "2019-02-22T12:00:00-05:00",
        "date": "2/22/2019",
        "time": 1130,
        "duration": 30,
        "timezone": -300,
        "status": "BK",
        "confirmationNumber": "Z151692",
        "confirmed": false,
        "email": "71.34.152.65",
        "lastModifiedOn": "2019-02-22T00:12:08Z",
        "lastModifiedBy": "71.34.152.65",
        "auditTrail": [
          {
            "id": "546723",
            "appointmentId": "296151",
            "modifiedOn": "2019-02-22T00:12:09.3969432+00:00",
            "modifiedBy": "71.34.152.65",
            "modificationType": "status",
            "statusBefore": "IN",
            "statusAfter": "BK",
            "notesBefore": "",
            "notesAfter": ""
          }
        ]
      }

      axios.put = jest.fn()

      axios.put
        .mockReturnValue( Promise.resolve( { data: mockResponse } ) )

      reservationId   = 296151
      appointmentData = {}


      const response =
              await request( app ).patch( `/api/onsched/appointments/${reservationId}/book`,
                                          appointmentData )

      expect( response.statusCode ).toEqual( 200 )
      expect( response.body  ).toMatchObject(
                                {
                                  "object": "appointment",
                                  "id": "296151",
                                  "locationId": "e4d61bd8-cdf3-4fc9-887e-2320dce062e0",
                                  "businessName": "Burlington Medical Center",
                                  "calendarId": "2",
                                  "serviceId": "5",
                                  "serviceName": "Assessment",
                                  "resourceId": "33",
                                  "resourceName": "Janice Joplin",
                                  "customerId": "54549",
                                  "rescheduledId": "",
                                  "createDate": "2019-02-22T00:09:19Z",
                                  "startDateTime": "2019-02-22T11:30:00-05:00",
                                  "endDateTime": "2019-02-22T12:00:00-05:00",
                                  "timezone": -300,
                                  "status": "BK",
                                  "confirmationNumber": "Z151692",
                                  "confirmed": false,
                                  "email": "71.34.152.65",
                                  "lastModifiedOn": "2019-02-22T00:12:08Z",
                                  "lastModifiedBy": "71.34.152.65",
                                  "auditTrail": [
                                    {
                                      "id": "546723",
                                      "appointmentId": "296151",
                                      "modifiedOn": "2019-02-22T00:12:09.3969432+00:00",
                                      "modifiedBy": "71.34.152.65",
                                      "modificationType": "status",
                                      "statusBefore": "IN",
                                      "statusAfter": "BK",
                                      "notesBefore": "",
                                      "notesAfter": ""
                                    }
                                  ]
                                }
                              )
    })

  })

})
