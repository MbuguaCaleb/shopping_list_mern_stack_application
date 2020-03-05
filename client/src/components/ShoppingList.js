import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
//connect brings in the state to the component
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    //this.props.item.items;--->trace to our state
    //state being brought in
    const { items } = this.props.item;
    return (
      <Container>
        <Button
          color='dark'
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState(state => ({
                //es6 used instead on name:name
                items: [...state.items, { id: uuidv4(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
        {/* A Mimic of the bootstrap list group class*/}
        <ListGroup>
          <TransitionGroup className='shoppingList'>
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => {
                      this.setState(state => ({
                        //filter item whose id is not the selected id//
                        //remember am having a single id after looping
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

//When ever you import an action you pass it as a prop to the component
//are a form of validation
ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

//remember it gets state from connect
//bringing in the state by the name of the reducer at index.js
//remember that item is the name given to this particuar reducer
const mapStateToProps = state => ({
  item: state.item
});

//map stateto props helps us take the global state from connect and
//use it as a component property.
//Its mapping a redux state to  component property
export default connect(mapStateToProps, { getItems })(ShoppingList);
