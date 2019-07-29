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
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHome, faChevronDown, faTasks } from '@fortawesome/free-solid-svg-icons'
export class TopMenu extends Component {
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
          <div className="top-menu">
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/"><FontAwesomeIcon icon={faHome}/> HỆ THỐNG QUẢN TRỊ NGUỒN NHÂN LỰC</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/" className="text-primary"><FontAwesomeIcon icon={faBell} /></NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar className="menu-expand">
                    <DropdownToggle nav caret>
                    <FontAwesomeIcon icon={faChevronDown}/>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <FontAwesomeIcon icon={faTasks}/> Management
                      </DropdownItem>
                      <DropdownItem divider />
                      <div className='dropdown-menu-notify'>
                        <DropdownItem>
                          14:00  Hội thảo chiến lược 1
                        </DropdownItem>
                        <DropdownItem>
                          14:00  Hội thảo chiến lược 1
                        </DropdownItem>
                        <DropdownItem>
                          14:00  Hội thảo chiến lược 1
                        </DropdownItem>
                      </div>
                      
                      <DropdownItem>
                          <Link to="/login" className="full-right" style={{float: 'right'}}>Đăng xuất</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}

export default TopMenu
