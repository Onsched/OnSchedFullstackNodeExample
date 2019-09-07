import { handle } from 'redux-pack'

import { LOAD_AVAILABILITY} from '../actions/availabilityActions'


const INITIAL_STATE = {}


export default function( state = INITIAL_STATE, action ) {
  const { type, payload } = action

  switch ( type ) {
    // use Redux-Pack to handle various states of loading process
    // https://github.com/lelandrichardson/redux-pack
    case LOAD_AVAILABILITY:
      return handle( state, action, {
        start:   previousState => ( { ...previousState, isLoading: true, availabilityError: null, availableTimes: null } ),
        finish:  previousState => ( { ...previousState, isLoading: false } ),
        failure: previousState => ( { ...previousState, availabilityError: payload } ),
        success: previousState => ( { ...previousState, availableTimes: payload.data.availableTimes } )
      })

    default:
      return state

  }

}
