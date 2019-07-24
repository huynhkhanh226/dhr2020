import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../public/favicon.ico';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import {configureStore} from './configuration/createReducerManager';
//import {initializeStore} from "./configuration/initializeStore";
import configureStore from './configuration/configureStore';
//import createReducer from './configuration/createReducer';
//const store = createStore(createReducer);
import Root from './components/Root';
import {rootReducer3} from './configuration/reducer3';
const store = configureStore();
//store.injectReducer("rootReducer3", rootReducer3);
store.reducerManager.add("rootReducer3", rootReducer3);
  console.log(store.getState());
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
