import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/types";

//our initial state
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

//Reducer function
//Reducer takes in an action ///actions are dispatched into the reducer
export default function(state = initialState, action) {
  switch (action.type) {
    //spread operrator means we are returning the current state
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
  }
}
