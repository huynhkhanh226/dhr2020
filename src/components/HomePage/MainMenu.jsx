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
      isOpen: false,
      hide: localStorage.getItem("user") == null ? 'hide': ''
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    //debugger;
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
                    to={'/W00F1000'}>
                    Phân quyền
                  </NavLink>
                  </DropdownItem>
                  
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink
                    className="nav-link"
                    to={'/W00F2000'}>
                    Thiết lập
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink
                    className="nav-link"
                    to={'/W00F3000'}>
                    Tuỳ chọn
                  </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <BNavLink href="#">Danh mục</BNavLink>
              </NavItem>
              <NavItem> 
                  <NavLink
                    className="nav-link"
                    to={'/ess'}>
                    ESS
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    className="nav-link"
                    to={'/mss'}>
                    MSS
                  </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(MainMenu);

