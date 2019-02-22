// routes to reserve/book/update appointments
const express    = require('express')
const axios      = require('axios')
const bodyParser = require('body-parser')

const { CONSUMER_API_URL,
        getRequestHeaders } = require('../../../utils/onschedApiUtils')


// initialize router
const router = express.Router()


//-----------------------------
// route specific middleware
//-----------------------------
router.use( bodyParser.json() )


//------------------
// Route Handlers
//------------------

// create a reservation
// required headers:
//    Authorization:  "Bearer <the access token>" 
//        A valid access token is required by the API
//
// required body parameters
//    name            format     description
//    -------         ---------  ------------
//    serviceId:      string     id for the service being booked
//    resourceId:     string     id for the resource being booked
//    startDateTime:  dateTime   start time YYYY-MM-DDTHH:mm:ss-Z format
//    endDateTime:    dateTime   end time YYYY-MM-DDTHH:mm:ss-Z format
//
// optional body parameters
//    name            format     description
//    -------         ---------  ------------
//    locationId:     string     id for the business location
//    customerId:     string     customer's id
//    bookedBy:       string     String for audit trail on who booked the appointment
//
// POST /api/onsched/appointments
router.post( '/',
  (request, response, next) => {
    const appointmentData = request.body || {}

    const config = getRequestHeaders(
                     request.headers,
                     request.connection.remoteAddress
                   )

    const reservationURL = `${CONSUMER_API_URL}/appointments`


    // call the OnSched API to reserve the appointment
    axios.post( reservationURL, appointmentData, config )
         // if response was successful, relay the response
         .then( onSchedResponse => {
           response.json( { data: onSchedResponse.data } )

         })
         // if not, pass the error to the
         // onschedErrorResponse middleware
         .catch( next )
  }

) //-- end POST /api/onsched/appointments


// logic for completing a booking from a reservation
// used by both PUT and PATCH methods
const _bookAppointment = (request, response, next) => {
  const reservationId   = request.params.reservationId
  const appointmentData = request.body || {}

  const config = getRequestHeaders(
                   request.headers,
                   request.connection.remoteAddress
                 )

  const bookURL = `${CONSUMER_API_URL}/appointments` +
                  `/${reservationId}/book`


  // call the OnSched API to book the appointment
  axios.put( bookURL, appointmentData, config )
       // if response was successful, relay the response
       .then( onSchedResponse => {
         response.json( { data: onSchedResponse.data } )

       })
       // if not, pass the error to the
       // onschedErrorResponse middleware
       .catch( next )

}


// complete booking of a reservation
// required headers:
//    Authorization:  "Bearer <the access token>" 
//        A valid access token is required by the API
//
// require path parameter
//    reservationId:  the reservationId of the slot returned from
//                    POST /api/onsched/appointments
//
// optional body parameters
//    name                      format     description
//    -------                   ---------  ------------
//    name:                     string     customer name
//    email:                    string     customer email
//    customerMessage:          string     optional customer message
//    phone:                    string     customer phone #
//    phoneType:                string     home/work/mobile
//    phoneExt:                 string     ext if any
//    notes:                    string
//    appointmentBookingFields: [ { name:  value }, ...]
//                              custom booking key value pairs related
//                              to the appointment
//    customerBookingFields:    [ { name:  value }, ...]
//                              custom booking key value pairs related
//                              to the customer
//
// PUT or PATCH /api/onsched/appointments/:reservationId/book
router.put(   '/:reservationId/book', _bookAppointment )
router.patch( '/:reservationId/book', _bookAppointment )


module.exports = router

