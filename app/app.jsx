var React = require('react');
var ReactDOM = require('react-dom');

// this syntax is basically doing this
// create a variable called X where { X } will be set to requre('react-router').X
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
