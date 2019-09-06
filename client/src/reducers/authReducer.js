import { handle } from 'redux-pack'

import { LOAD_ACCESS_TOKEN } from '../actions/authActions'


const INITIAL_STATE = { isLoading: true }


export default function( state = INITIAL_STATE, action ) {
  const { type, payload } = action

  switch ( type ) {

    case LOAD_ACCESS_TOKEN:
      return handle( state, action, {
        start:   previousState => ( { ...previousState, isLoading: true, accessTokenError: null, token: null } ),
        finish:  previousState => ( { ...previousState, isLoading: false } ),
        failure: previousState => ( { ...previousState, accessTokenError: payload.data } ),
        success: previousState => ( { ...previousState, token: payload.data } )
      })

    default:
      return state

  }

}