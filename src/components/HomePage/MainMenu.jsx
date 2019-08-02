import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink as BNavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
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
              <UncontrolledDropdown nav inNavbar className='main-menu-dropdown'>
                <DropdownToggle nav caret>
                  Hệ thống
                </DropdownToggle>
                <DropdownMenu left={'left'}>
                  <DropdownItem>
                    <NavLink
                    className="nav-link"
                    to={{ pathname: "/W00F1000", state: { pass: "some data" } }}>
                    Phân quyền
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className="nav-link"
                      to={{ pathname: "/W00F1000", state: { pass: "some data" } }}>
                      Phân quyền
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink
                      className="nav-link"
                      to={{ pathname: "/W00F1000", state: { pass: "some data" } }}>
                      Phân quyền
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <BNavLink href="#">Danh mục</BNavLink>
              </NavItem>
              <NavItem>
                <BNavLink href="#">Tuyển dụng</BNavLink>
              </NavItem>
              <NavItem>
                <BNavLink href="#">Nhân sự - Bảo hiểm</BNavLink>
              </NavItem>
              <NavItem>
                <BNavLink href="#">Công phép - Lương</BNavLink>
              </NavItem>
              <NavItem>
                <BNavLink href="#">Đào tạo - Đánh giá</BNavLink>
              </NavItem>
              <NavItem>
                <BNavLink href="#">Trang thiết bị lao động</BNavLink>
              </NavItem>
              <NavItem>
                <BNavLink href="#">Truy vấn - Báo cáo</BNavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(MainMenu);

