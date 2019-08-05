import React, {Component} from 'react';
import { connect } from "react-redux";
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
    DropdownItem,
    Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHome, faChevronDown, faTasks, faPlus, faUser, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import {userActions} from '../../actions/user.actions';
export class TopMenuPage extends Component {
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

      logout = () =>{
        this.props.logout();
      }

      render() {
        return (
          <div className="top-menu">
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/"><FontAwesomeIcon icon={faHome} style={{color: '#007bff'}}/> <strong>HỆ THỐNG QUẢN TRỊ NGUỒN NHÂN LỰC</strong></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/" className="text-primary"><FontAwesomeIcon icon={faBell} style={{color: 'orange'}}/></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/" className="text-primary" style={{padding: '5px 9px'}} ><FontAwesomeIcon icon={faUser} /></NavLink>
                  </NavItem>
                  
                  <UncontrolledDropdown nav inNavbar className="menu-expand">
                    <DropdownToggle nav caret>
                    <FontAwesomeIcon icon={faChevronDown}/>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <div style={{marginLeft: '25px'}}><FontAwesomeIcon icon={faTasks}/> Management</div>
                      <DropdownItem divider />
                      <div style={{marginLeft: '25px', marginBottom: '10px'}}><FontAwesomeIcon icon={faPlus} style={{color: '#17a2b8'}}/> Thêm</div>
                      <div className='dropdown-menu-notify'>
                        <DropdownItem>
                          <FontAwesomeIcon icon={faDotCircle} style={{color: 'orange'}}/>  14:00  Hội thảo chiến lược 1
                        </DropdownItem>
                        <DropdownItem>
                        <FontAwesomeIcon icon={faDotCircle} style={{color: 'blue'}}/>  14:00  Hội thảo chiến lược 1
                        </DropdownItem>
                        <DropdownItem>
                          <FontAwesomeIcon icon={faDotCircle} style={{color: 'blue'}}/>  14:00  Hội thảo chiến lược 1
                        </DropdownItem>
                      </div>
                      <div style={{marginRight: '25px', marginTop: '10px'}}><Button color="link" onClick={this.logout}>Đăng xuất</Button></div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}


function mapState(state) {
  const { loggingIn } = state.authentication;
  const { alert } = state;

  return { loggingIn, alert };
}

const actionCreators = {
  logout: userActions.logout
};

const TopMenu = connect(mapState, actionCreators)(TopMenuPage);
export default TopMenu
