import axios       from 'axios'
import querystring from 'querystring'


export const LOAD_AVAILABILITY = 'LOAD_AVAILABILITY'


// loadAvailability
// requiredParams: is an object containing the following fields
//    name         format       description
//    ----------   ----------   -------------
//    serviceId:   string       the serviceId of the which is being searched
//    startDate:   string       starting day of search (formatted in YYYY-MM-DD format)
//    endDate:     string       last day of search (formatted in YYYY-MM-DD format)
//
// queryParams is an optional object containing any of the following options
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
//
export const loadAvailability = ( requiredParams,
                                  queryParams = {} ) => {

  const { serviceId,
          startDate,
          endDate } = requiredParams

  const queryString = querystring.stringify( queryParams )

  const availabilityRoute = `/api/onsched/availability/${serviceId}` +
                            `/${startDate}/${endDate}/` +
                            `?${queryString}`

  return {
    type:    LOAD_AVAILABILITY,
    promise: axios.get( availabilityRoute )
  }

}
