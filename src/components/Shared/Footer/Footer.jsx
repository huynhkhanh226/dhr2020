import React, {Component} from 'react';
import {FormGroup, Col} from 'reactstrap';
import './Footer.scss';

export class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             footerLogo: require('../../../assets/images/footer-logo.svg')
        }
    }
    render() {
        return (<div className="login-footer">
            <FormGroup row>
                <Col sm={6}>
                    <div className="left-footer">
                        <img src={this.state.footerLogo} alt="" />
                    </div>
                </Col>
                <Col sm={6}><div className="right-footer">Trao giải pháp, nhận niềm tin</div></Col>
            </FormGroup>
        </div>)
    }
}

export default Footer
