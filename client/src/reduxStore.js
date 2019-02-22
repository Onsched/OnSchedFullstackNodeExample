import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools }          from 'redux-devtools-extension/logOnlyInProduction'

import reducers from './reducers'


// create the redux store
const store = createStore(
                reducers,             // reducers
                composeWithDevTools(  // enable redux-devtools ext in browser
                  applyMiddleware( )  // add any redux middleware
                )
              )


export default store
