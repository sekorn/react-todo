var React = require('react');
var {Provider} = require('react-redux');
var ReactDOM = require('react-dom');

// this syntax is basically doing this
// create a variable called X where { X } will be set to requre('react-router').X
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New State', state);
  TodoAPI.setTodos(state.todos);
});

 var initialTodos = TodoAPI.getTodos();
 store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.addTodo('clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
