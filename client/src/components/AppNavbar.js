import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "./auth/Logout";
class AppNavbar extends Component {
  state = {
    isOpen: false
  };
  //toggling to change the state
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

  //PropTypes
  //Are a form of validation which show what the component will have
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);
