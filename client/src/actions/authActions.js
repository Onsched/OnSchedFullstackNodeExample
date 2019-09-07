import axios from 'axios'


export const INITIALIZE_ACCESS_TOKEN = 'INITIALIZE_ACCESS_TOKEN'


export const initializeAccessToken = () => {
  return {
    type:    INITIALIZE_ACCESS_TOKEN,
    promise: axios.post( '/api/auth/initialize' )
  }

}
