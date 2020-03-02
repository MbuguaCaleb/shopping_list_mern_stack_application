import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      {
        id: uuidv4(),
        name: "Eggs"
      },
      {
        id: uuidv4(),
        name: "Milk"
      },
      {
        id: uuidv4(),
        name: "Steak"
      },
      {
        id: uuidv4(),
        name: "Water"
      }
    ]
  };
  render() {
    const { items } = this.state;
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

export default ShoppingList;
