import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, path, ...rest }) => (
    <Route 
    path= {path} 
    {...rest} 
    render={props => (
            localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { redirect: props.location, error: "You need to login first!" } }} />
    )} />
)