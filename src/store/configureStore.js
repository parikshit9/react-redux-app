import { createStore, applyMiddleware } from 'redux'

//Redux Thunk need to be added as a middleware

import thunkMiddleware from 'redux-thunk'

// Redux logging middleware
import { createLogger } from 'redux-logger'

// Import the root reducer
import rootReducer from '../todos/reducers/rootReducer'

require('../twitter-call').getLatestTweetsByHashtag(['#cheese'], function(err, tweets){
  //do error handling
  //pass it back to client side, tweets are already json object
  // res.json(tweets);
  console.log(tweets);
});


// Create the redux logging middleware 
const loggerMiddleware = createLogger()


// Configuring the Store. PreloadState is the initial State.
export function configureStore(preloadedState) {

  return createStore(
    rootReducer,
    preloadedState,

    //Apply the middleware usign the Redux's provided applymiddleware function

    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}