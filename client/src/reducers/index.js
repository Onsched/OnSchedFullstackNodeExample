import { combineReducers } from 'redux'

import authReducer         from './authReducer'
import availabilityReducer from './availabilityReducer'


export default combineReducers(
  {
    auth:         authReducer,
    availability: availabilityReducer
  }
)
