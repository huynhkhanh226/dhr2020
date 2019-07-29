import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'
export class MainMenu extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
            <div className="main-menu">
                <Navbar color="light" light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                            <NavLink href="#">Hệ thống</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Danh mục</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Tuyển dụng</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Nhân sự - Bảo hiểm</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Công phép - Lương</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Đào tạo - Đánh giá</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Trang thiết bị lao động</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Truy vấn - Báo cáo</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MainMenu
