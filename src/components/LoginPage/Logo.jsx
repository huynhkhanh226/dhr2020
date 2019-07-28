import React, { Component } from 'react'

export class Logo extends Component {
    render() {

        return (
            <div className="text-center">
                <span className="text-center">
                    <img className="logo-solid" src={this.props.logo} alt=""></img>
                </span>
                
            </div>
        )
    }
}

export default Logo
