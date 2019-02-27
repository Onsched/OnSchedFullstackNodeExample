import { handle } from 'redux-pack'

import { LOAD_AVAILABILITY} from '../actions/availabilityActions'


const INITIAL_STATE = {}


export default function( state = INITIAL_STATE, action ) {
  const { type, payload } = action

  switch ( type ) {

    case LOAD_AVAILABILITY:
      return handle( state, action, {
        start:   previousState => ( { ...previousState, isLoading: true, availabilityError: null, availability: null } ),
        finish:  previousState => ( { ...previousState, isLoading: false } ),
        failure: previousState => ( { ...previousState, availabilityError: payload } ),
        success: previousState => ( { ...previousState, availableTimes: payload.data.data.availableTimes } )
      })

    default:
      return state

  }

}
