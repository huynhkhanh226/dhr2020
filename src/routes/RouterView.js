import React, { Component } from 'react'
import {Route, Redirect } from 'react-router-dom';
import {PrivateRoute} from '../components/PrivateRoute.jsx';

function RouteWithSubRoutes(props,route) {
    debugger;
    
    //if (route.name == this.props.name || this.props.name === ''){
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} childRoutes={route.childRoutes} />
            )} />
    )
    //}
    
    // if (route.isRequiredAuth){
    //     return (
    //         <Route 
    //             path= {route.path} 
    //             render={props => (
    //                     localStorage.getItem('user')
    //                     ? <route.component {...props} />
    //                     : <Redirect to={{ pathname: '/login', state: { redirect: props.location, error: "You need to login first!" } }} />
    //             )} />
    //     );
    // }else{
    //     return (
    //         <Route
    //         path={route.path}
    //         render={props => (
    //             // pass the sub-routes down to keep nesting
    //             <route.component {...props} childRoutes={route.childRoutes} />
    //         )}
    //     />
    //     )
    // }
    
}


export class RouterView extends Component {
    //have prop : name, routes
    render() {
        return (
            
            <div>
                {
                    this.props.routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))
                }
            </div>
        )
    }
}

export default RouterView
