import React, { Component } from 'react'
import './EssMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTasks, faList, faAddressBook, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import {FormGroup, Col, Row, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isTablet,
    isMobile,
    deviceType,
  } from "react-device-detect";

export class EssMenu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemPerRow: 4
        }
    }
    

    render() {
        console.log(isBrowser);
        console.log(isTablet);
        console.log(isMobile);
        console.log(deviceType);
        //console.log(document.getElementsByClassName('ess-menu').clientWidth);
        return (
            <div className='ess-menu'>
                <Container>
                    <Row >
                        <Col sm={3} className="item">
                            <NavLink
                                className="nav-link"
                                to={'/W00F3000'}>
                                <Card>
                                    <CardBody>
                                        <CardTitle><FontAwesomeIcon icon={faCoffee} style={{color: 'orange', fontSize: '500%'}}/></CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                    </CardBody>
                                </Card>
                            </NavLink>
                            
                        </Col>
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faList} style={{color: 'blue', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faTasks} style={{color: 'red', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faAmbulance} style={{color: 'pink', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <p className='break-down'></p>
                    <Row >
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faAmbulance} style={{color: 'orange', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faList} style={{color: 'blue', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faTasks} style={{color: 'pink', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faCoffee} style={{color: 'pink', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <p className='break-down'></p>
                    <Row >
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faTasks} style={{color: 'gray', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faList} style={{color: 'green', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faAmbulance} style={{color: 'orange', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3} className="item">
                            <Card>
                                <CardBody>
                                    <CardTitle><FontAwesomeIcon icon={faCoffee} style={{color: 'orange', fontSize: '500%'}}/></CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <p className='break-down'></p>
                    
                    
                </Container>
                
            </div>
        )
    }
}

export default EssMenu
