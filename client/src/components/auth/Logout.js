import React, { Component, Fragment } from "react";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import Proptypes from "prop-types";

export class Logout extends Component {
  render() {
    return (
      <Fragment>
        <NavLink onClick={this.props.logout} href='#'>
          Logout
        </NavLink>
      </Fragment>
    );
  }

  static propTypes = {
    logout: Proptypes.func.isRequired
  };
}

//null put in for Map state to props
export default connect(null, { logout })(Logout);
