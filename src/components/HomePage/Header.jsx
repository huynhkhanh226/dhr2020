import React, { Component } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
export class Header extends Component {
    render() {
        return (
            <div className='header-intro'>
                <div className="section_one">
                    <div style={{marginTop: '18%'}}>
                        <span><strong>CHÀO BUỔI SÁNG!</strong></span>
                    </div>
                    <div>
                        <span>Hi, {this.props.userName}</span>
                    </div>
                </div>
                <div className="section_two">
                    <div style={{marginTop: '18%'}}>
                        <span><strong>TP. Hồ Chí Minh</strong></span>
                    </div>
                    <div>
                        <span>29<sup>o</sup>C/24 - 33<sup>o</sup>C</span>
                    </div>
                </div>
                <div className="section_three">
                    <div className='header'>
                        <div className="left">
                            <span><strong>SINH NHẬT</strong> <FontAwesomeIcon icon={faBirthdayCake} style={{color: 'orange'}}/></span>
                        </div>
                        <div className="right">
                            <span><a href="/">Xem hết</a></span>
                        </div>
                    </div>
                    <div className='birthday-list'>
                        <div className='item'>
                            <img src="https://png.pngtree.com/svg/20170602/user_circle_1048392.png" alt=""/>
                            <span>Huỳnh Khanh</span>
                        </div>
                        <div className='item'>
                            <img src="https://png.pngtree.com/svg/20170602/user_circle_1048392.png" alt=""/>
                            <span>Huỳnh Khanh</span>
                        </div>
                        <div className='item'>
                            <img src="https://png.pngtree.com/svg/20170602/user_circle_1048392.png" alt=""/>
                            <span>Huỳnh Khanh</span>
                        </div>
                        <div className='item'>
                            <img src="https://png.pngtree.com/svg/20170602/user_circle_1048392.png" alt=""/>
                            <span>Huỳnh Khanh</span>
                        </div>
                        <div className='item'>
                            <img src="https://png.pngtree.com/svg/20170602/user_circle_1048392.png" alt=""/>
                            <span>Huỳnh Khanh</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
