import { combineReducers } from "redux";
import { authentication } from "./auth.reducer";
import { alert } from "./alert.reducer";



export const staticReduces = {
  authentication,
  alert
};

const createReducer = asyncReducers =>
  combineReducers({
    authentication,
    alert,
    ...asyncReducers
  });

export default createReducer;
