import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import createReducer from './createReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  //const composedEnhancers = compose(...enhancers)
  const composedEnhancers = composeWithDevTools(...enhancers)
  const store = createStore(createReducer(), preloadedState, composedEnhancers)
  console.log(store);
  return store
}