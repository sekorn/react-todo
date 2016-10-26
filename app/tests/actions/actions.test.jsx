import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase';

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123abc',
        todoText: 'anything we like',
        completed: false,
        createdAt: 0
      }
    };

    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  })

  it('should generate add todos action', () => {
    var todos = [
      {
        id: '111',
        text: 'first text',
        completed: false,
        createdAt: 1299,
        completedAt: undefined
      },
      {
        id: '222',
        text: 'second text',
        completed: false,
        createdAt: 1300,
        completedAt: undefined
      }
    ];
    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My Todo Item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: { completed: false}
    };

    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  })

  describe('Tests with Firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef =firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'something to do',
          completed: false,
          createdAt: 3908098
        });
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch update todo action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });

    it('should dispatch start add todos action', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('something to do');

        done();
      }, done);
    });
  });

  describe('Authentication Tests', () => {
    it('should generate login action object', () => {
      const action = {
        type: 'LOGIN',
        uid: '123abc'
      };

      const res = actions.Login(action.uid);

      expect(res).toEqual(action);
    });

    it('should dispatch start logout action', () => {
      const action = {
        type: 'LOGOUT'
      };

      const res = actions.Logout();

      expect(res).toEqual(action);
    });
  });
});
