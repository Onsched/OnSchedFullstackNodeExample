// return availability data
const express = require('express')
const axios   = require('axios')

const { CONSUMER_API_URL,
        getRequestHeaders } = require('../../utils/onschedApiUtils')


// initialize router
const router = express.Router()


//------------------
// Route Handlers
//------------------

// check availability on a service
// required headers:
//    Authorization:  "Bearer <the access token>" 
//        A valid access token is required by the API
//
// required params:
//    serviceId: the serviceId of the which is being searched
//    startDate: starting day of search (formatted in YYYY-MM-DD format)
//    endDate:   last day of search (formatted in YYYY-MM-DD format)
//
// option query parameters
//    name                format    description
//    ----------          -------   ------------
//    startTime:          integer   starting time on startDate. defaults to
//                                  business hours start. HHmm format
//                                  (eg 1445 for 2:45 pm)
//    endTime:            integer   ending time on endDate. defaults to
//                                  business hours end. HHmm format
//                                  (eg 1445 for 2:45 pm)
//    locationId:         string    id for the business location to search
//    resourceId:         string    id for the resource to searched
//    resourceGroupId:    string    id for the resource group to searched
//    resourceIds:        string    comma separated list of resourceIds to search
//    duration:           integer   duration in minutes for the appointment
//    tzOffset:           integer   timezone offset in minutes
//    dayAvailability:    integer   Return day availability for number of
//                                  days specified
//    firstDayAvailable:  boolean   return available times for
//                                  the first available
//
// GET '/api/onsched/availability/:serviceId/:startDate/:endDate'
router.get( '/:serviceId/:startDate/:endDate',
  (request, response, next) => {
    const { serviceId,
            startDate,
            endDate } = request.params

    // build the endpoint string
    const availabilityURL = `${CONSUMER_API_URL}/availability` +
                            `/${serviceId}` +
                            `/${startDate}` +
                            `/${endDate}`

    // configure headers
    const config = getRequestHeaders(
                     request.headers,
                     request.connection.remoteAddress
                   )
    // add query parameters
    config.params = request.query


    // submit to OnSched API endpoint
    axios.get( availabilityURL, config )
         // if response was successful, relay the response
         .then( onSchedResponse => {
           response.json( { data: onSchedResponse.data } )

         })
         // if not, pass the error to the
         // onschedErrorResponse middleware
         .catch( next )

  }

) //-- end GET /api/onsched/availability/:serviceId/:startDate/:endDate


module.exports = router

