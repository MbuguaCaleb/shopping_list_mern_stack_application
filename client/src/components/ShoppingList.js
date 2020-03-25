import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
//connect brings in the state to the component
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  //calling actions
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    //this.props.item.items;--->trace to our state
    //state being brought in
    const { items } = this.props.item;
    return (
      <Container>
        {/* A Mimic of the bootstrap list group class*/}
        <ListGroup>
          <TransitionGroup className='shoppingList'>
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                  ) : null}

                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
  //When ever you import an action you pass it as a prop to the component
  //are a form of validation
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
}

//remember it gets state from connect
//bringing in the state by the name of the reducer at index.js
//remember that item is the name given to this particuar reducer
const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

//map stateto props helps us take the global state from connect and
//use it as a component property.
//Its mapping a redux state to  component property
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
