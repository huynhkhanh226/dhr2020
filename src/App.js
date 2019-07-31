import React, {Component} from "react";
import logo from "./assets/images/logo.svg";
import { connect } from 'react-redux';
import "@/App.scss";
import {Route, Router} from "react-router-dom";

import {history} from './helpers/index';
import {PrivateRoute} from './components/PrivateRoute.jsx';
import {HomePage} from './components/HomePage/HomePage.jsx';
import {LoginPage} from './components/LoginPage/LoginPage.jsx';
import { alertActions } from "./_actions/alert.actions";
import {FormGroup, Col , Label} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => { // this.props.clearAlerts();
            this.props.clearAlerts();
        });
    }


    render() {
        //const { alert } = this.props;
        return (
            <div className="container-fluid">
                   <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/"
                                    component={HomePage}/>
                                <Route path="/login"
                                    component={LoginPage}/>
                            </div>
                   </Router>
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
