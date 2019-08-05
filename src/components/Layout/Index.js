import React, { Component } from 'react'
import Login from '../LoginPage/LoginPage.jsx';
import {Route} from 'react-router-dom';
export class Index extends Component {
    render() {
        debugger;
        return (
            <div>
               <Route path='/login' component={Login} />
            </div>
        )
    }
}

export default Index
