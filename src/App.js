import React, {Component} from "react";
import logo from "./assets/images/logo.svg";

import "@/App.scss";
import {Route, Router} from "react-router-dom";

import {history} from './helpers/index';
import {PrivateRoute} from './components/PrivateRoute.jsx';
import {HomePage} from './components/HomePage/HomePage.jsx';
import {LoginPage} from './components/LoginPage/LoginPage.jsx';

export class App extends Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => { // this.props.clearAlerts();
            console.log("Hello router");
        });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
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

export default App;
