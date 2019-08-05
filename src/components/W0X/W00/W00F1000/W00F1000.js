import React, { Component, Suspense } from 'react';
import {NavLink} from 'react-router-dom';
import RouterView from '../../../../routes/RouterView';

export class W00F1000 extends Component {

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1 style={{marginTop: '50px'}}>Hello W00F1000</h1>

                <NavLink
                    className="nav-link"
                    to={`${this.props.match.url}/W00F2000`}>
                    call sub router
                </NavLink>
                
                <RouterView routes={this.props.childRoutes} />
                
            </div>
        )
    }
}

export default W00F1000
