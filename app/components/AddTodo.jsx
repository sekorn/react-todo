var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var text = this.refs.todo.value;

    if (text.length > 0) {
      this.refs.todo.value = '';
      this.props.onAddTodo(text);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="add-todo">
          <input type="text" ref="todo" placeholder="What do you need to to?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
