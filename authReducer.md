**IMPLEMENTING THE LOGIN REDUCER**

```
Remember that it is from actions that we make requests to APIs and return payloads  giving them to the reducers.


```

```
combine reducers helps us combine the different types of state , for example if you have data coming from different tables...


Combined reducer helps you in comnining this state.

Remeber that every actio has a type and therefore once it is dispatched affects the state accordingly.


The action is the one that is imported to the component then connect () is the one that passes it to the reducer thus affecting the state.

Mapstate to props brings in the global state to the component.

Wheever i see an action i should know that it will be called from a component!

Redux thunk helps you dispatch a mini action from a major action..example an actions error from the action that is making the success request incase it fails.

Return exits from a function...

```

**VALID EXPLANATIONS**

```

(a)In Javascript, Redux is used as state container for many apps, mostly with React. It relies on actions that get dispatched and listened by reducers, which update the state accordingly.

(b) The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

(c)As the first argument passed in to connect , mapStateToProps is used for selecting the part of the data from the store that the connected component needs.

```

**MORE LIFECYCLE METHODS**

```
ComponentDidUpdate is another lifecycle method ...
It is called once the state in a particular component updates

It takes in two parameters...Which are previousprops and nextProps

```
