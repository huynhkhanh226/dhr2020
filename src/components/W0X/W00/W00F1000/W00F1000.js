import React, { Component, Suspense } from 'react';
import {NavLink} from 'react-router-dom';
import RouterView from '../../../../routes/RouterView';

export class W00F1000 extends Component {

    render() {
        return (
            <div>
                Hello W00F1000
                <NavLink
                    className="nav-link"
                    to={`${this.props.match.url}/W00F2000`}>
                    call W000F2000
                </NavLink>
                <NavLink
                    className="nav-link"
                    to={`/W00F1000/W00F2000`}>
                    call W000F2000
                </NavLink>
                    <RouterView routes={this.props.childRoutes} />
                
            </div>
        )
    }
}

export default W00F1000
