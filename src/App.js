import React, {Component} from "react";
import logo from "./assets/images/logo.svg";
import { connect } from 'react-redux';
import "@/App.scss";
import {Route, Router} from "react-router-dom";

import {history} from './helpers/index';
import {PrivateRoute} from './components/PrivateRoute.jsx';
import {HomePage} from './components/HomePage/HomePage.jsx';
import {LoginPage} from './components/LoginPage/LoginPage.jsx';
import { alertActions } from "./actions/alert.actions";

class App extends Component {
    constructor(props) {
        super(props);
        //debugger;
        history.listen((location, action) => { // this.props.clearAlerts();
            console.log("Hello router");
            this.props.clearAlerts();
        });
    }


    render() {
        console.log("dsfdsfsd");
        return (
            <div>
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/"
                                    component={HomePage}/>
                                <Route path="/login"
                                    component={LoginPage}/>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}
function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};
const connectedApp = connect(mapState, actionCreators)(App);
export {connectedApp as App};
