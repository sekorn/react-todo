var React = require('react');
var ReactDOM = require('react-dom')
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoapp = TestUtils.renderIntoDocument(<TodoApp />);

    todoapp.setState({todos: []});
    todoapp.handleAddTodo(todoText);

    expect(todoapp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false
    };

    var todoapp = TestUtils.renderIntoDocument(<TodoApp />);
    todoapp.setState({todos: [todoData]});

    // check that todos first item has completed false
    expect(todoapp.state.todos[0].completed).toBe(false);

    // call handleToggle with 11
    todoapp.handleToggle(todoapp.state.todos[0].id);

    // Verify that value changed.
    expect(todoapp.state.todos[0].completed).toBe(true);
  });
});
