import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

//global state
{
  //takes three parametes rootreducer , initialstate and anymiddlewarre.
  /*
  rember the thunk middleware is used to dispatch actions to the store.
   */
}
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
