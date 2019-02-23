import axios from 'axios'


export const LOAD_ACCESS_TOKEN = 'LOAD_ACCESS_TOKEN'


export const loadAccessToken = () => {
  return {
    type:    LOAD_ACCESS_TOKEN,
    promise: axios.post( '/api/auth/initialize' )
  }

}
