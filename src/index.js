import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../public/favicon.ico';
import {MyContext} from './configuration/context';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {initializeStore} from "./configuration/initializeStore";
//import configureStore from './configuration/configureStore';
//import createReducer from './configuration/createReducer';
//const store = createStore(createReducer());
const store = initializeStore();
const ContextA = MyContext(store);
console.log(ContextA);
ReactDOM.render(<Provider context={ContextA} store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
