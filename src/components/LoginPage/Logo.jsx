import React, { Component } from 'react'

export class Logo extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="text-center test">
                    <img className="logo-solid" src={this.props.logo} alt=""></img>
                </div>
            </div>
        )
    }
}

export default Logo
