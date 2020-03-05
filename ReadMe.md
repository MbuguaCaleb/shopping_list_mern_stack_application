**Project SetUp**

**Backend**

```
(a)npm i express body-parser mongoose concurrently

Mongoose is the ORM for MongoDB.
body-parser helps you make requests to your server.

An ORM Brings in an abstraction layer.and this you may have models.

Body Parser helps out your express server when receiving post requests.
```

**REACT CLIENT**

```
1)cd client

2)npx create-react-app .

3)Project employs proxy that prefixes the backend server.

```

**Client Dependencies**

```
(a) npm i bootstrap reactstrap uuid react-transition-group


```

**Hooks vs ClassBased Components**

```
By default classes have life cycle methods which are set the state example component did Mount.
Hooks bring an alternative way of setting your state without calling the class default methods.
Traditionally react was more efficient with classes but after introduction of hooks they are more
functional.

Dimistification between classes and hooks is only with how you render your state.And how Lifecycle methods are called

```

**ClassBased state**

```
this.setstate sets the state when you are using a class...Remember the great role that the spread operator plays in referring to the current state items.

Spread operator [...]takes in the current state.
```

**Redux FLOW**

```
Data will be kept at the application level state.

This means that data will first come to our redux store and then to our application.

Because of the amount of boiler plate that does exist in redux it is advisable to always have premade custom boiler templates for redux since very little changes once the boiler plate has been done.

```

**Installing Redux**

```
 npm i redux react-redux redux-thunk

 (a)react redux helps to join redux with react.

 {binds react and redux together}

 It brings in provider which incorporates the store to your application in the app.js file
 Everything including all the components are wrapped in the provider and thus we are able
 to share our state.


 (b)Redux thunk is a middleware that helps out in dispatch of actions to the reducers.More
    so when making asynchronous calls to the server.


```

**connect**

```
Helps us get state from redux into a react component.


```

**MY Redux summary**

```
(a)I dispatch an action  which brings in the state value from map state to props..
This action returns an action type that is passed to the reducer bringing in the state.
The reducer acts upon the given action type to return the state

(b)Mapstate to props  is the  connect method that has the state from the store.This will help you bring the particular state from the combinedd reducer or the root reducer....


GETTING THE STATE

const mapStateToProps = state => ({
  item: state.item
});

item above is the key of the state from the combined reducer.

From this i therefore have the state from the particuular action dispatches from that component .

I can therefore map the state and use it accordingly.

BRINGING THE STATE TO THE COMPONENT AS A PROP

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};


DESTRUCTURING TO HAVE THE STATE

const { items } = this.props.item;

```

**BIG QUESTION TO ASK SO AS TO UNDERSTAND REDUX**

```
What is my combined reducer giving me back as the state based on my action.

import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

export default combineReducers({
  item: itemReducer
});

The result of the item reducer is the items which is the state.s

Thank you God for an understading of redux.

```

**Notes by**

```
MbuguaCaleb

```
