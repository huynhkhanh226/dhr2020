import { createStore } from "redux";
import createReducer from "./staticReducers";

export const initializeStore = () => {
  const store = createStore(createReducer());
  //debugger;
  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Return the modified store
  return store;
};
//export default initializeStore;