import React, { Component } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class RegisterModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    msg: null
  };

  //component update lifecycle
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    //closing the modal after successful Authentication
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }
  toggle = () => {
    //Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };
  //we can reuse this onchange
  //it is getting the key from the exact target
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;
    //Creating a user object
    const newUser = {
      name,
      email,
      password
    };

    //Attempt to register
    this.props.register(newUser);
  };
  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href='#'>
          Register
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='name'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: "2rem" }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }

  //more like validations
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
}

//this brings in the state from the various components
/*eg displaying an error once register fails is displayed  to my com

*/
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

//Map state to props helps you get the current value of the state then add to it
export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
