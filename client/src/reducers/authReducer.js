import { handle } from 'redux-pack'

import { INITIALIZE_ACCESS_TOKEN } from '../actions/authActions'


const INITIAL_STATE = { isLoading: true }


export default function( state = INITIAL_STATE, action ) {
  const { type, payload } = action

  switch ( type ) {
    // use Redux-Pack to handle various states of loading process
    // https://github.com/lelandrichardson/redux-pack
    case INITIALIZE_ACCESS_TOKEN:
      return handle( state, action, {
        start:   previousState => ( { ...previousState, isLoading: true, accessTokenError: null, success: null } ),
        finish:  previousState => ( { ...previousState, isLoading: false } ),
        failure: previousState => ( { ...previousState, accessTokenError: payload.data, success: false } ),
        success: previousState => ( { ...previousState, success: true } )
      })

    default:
      return state

  }

}
