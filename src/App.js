import React, { Component } from "react";
import logo from "./assets/images/logo.svg";
import { connect } from 'react-redux';
import "@/App.scss";
import { Route, Router, Redirect } from "react-router-dom";
import { history } from './helpers/index';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import { alertActions } from "./actions/alert.actions";


const Login = React.lazy(() => import('./components/LoginPage/LoginPage.jsx'));
const Home = React.lazy(() => import('./components/HomePage/HomePage.jsx'));
const loading = () => <div className="text-center">Loading...</div>;


class App extends Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            console.log("Hello Khanh");
            console.log(location);
            console.log(action);
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        console.log(alert);
        return (
            <div className="container-fluid">
                <Router history={history}>
                    <React.Suspense fallback={loading()}>
                        <PrivateRoute exact path="/" component={Home}>
                                <Route exact path="/home" component={Home} />
                        </PrivateRoute>
                        
                        
                        <Route path="/login" component={Login} />
                    </React.Suspense>
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
export { connectedApp as App };
