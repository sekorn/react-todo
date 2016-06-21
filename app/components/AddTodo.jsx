var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var text = this.refs.todo.value;

    if (text.match(/^[0-9a-zA-Z]*$/) && text !== "") {
      this.refs.todo.value = '';
      this.props.onAddTodo(text);
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="add-todo">
          <input type="text" ref="todo" placeholder="What do you need to to?" />
          <button className="button">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
