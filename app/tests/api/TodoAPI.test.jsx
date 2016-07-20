var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filteredTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'some text here',
        completed: true
      },
      {
        id: 2,
        text: 'other text here',
        completed: false
      },
      {
        id: 3,
        text: 'some text here',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    })

    it('should return only items not completed if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    })

    it('should return all items when search text is empty', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only todos that match when search text provided', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, 'Some');
      expect(filteredTodos.length).toBe(2);
    });
  });
});
