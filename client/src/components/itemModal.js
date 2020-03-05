import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
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

    const newItem = {
      id: uuidv4(),
      name: this.state.name
    };

    //add item via add item action
    this.props.addItem(newItem);

    //Close Modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Item</Label>
                <Input
                  type='text'
                  name='name'
                  placeholder='Add shopping item'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

//i have to bring in the state since i will be adding to it
//everytime i do state.item i have my state in form of item
const mapStateToProps = state => ({
  item: state.item
});

//Map state to props helps you get the current value of the state then add to it
export default connect(mapStateToProps, { addItem })(ItemModal);