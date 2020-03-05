import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

//action has to take an id since this is a delete
export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

//takes a payload
export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
