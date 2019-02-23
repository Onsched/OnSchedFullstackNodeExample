import { createStore, applyMiddleware }      from 'redux'
import { composeWithDevTools }               from 'redux-devtools-extension/logOnlyInProduction'
import { middleware as reduxPackMiddleware } from 'redux-pack'

import reducers from './reducers'


// create the redux store
const store = createStore(
                reducers,             // reducers
                composeWithDevTools(  // enable redux-devtools ext in browser
                  applyMiddleware(    // add any redux middleware
                    reduxPackMiddleware
                  )
                )
              )


export default store
