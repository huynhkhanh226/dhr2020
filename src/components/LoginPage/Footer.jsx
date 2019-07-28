import React, {Component} from 'react';
import {FormGroup, Col} from 'reactstrap';

export class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             footerLogo: require('../../assets/images/footer-logo.svg')
        }
    }
    
    render() {
        return (<div className="login-footer">
            <FormGroup row>
                <Col sm={6}><img src={this.state.footerLogo} alt="" /></Col>
                <Col sm={6}>Trao giải pháp, nhận niềm tin</Col>
            </FormGroup>
        </div>)
    }
}

export default Footer
