import { v4 as uuidv4 } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";
//Reducers
{
  /*
takes in action types.
taken by store

*/
}
const initialState = {
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

//remeber that the reducer takes in the initial state and the action type
//The reducer receives an action and the initial state
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
