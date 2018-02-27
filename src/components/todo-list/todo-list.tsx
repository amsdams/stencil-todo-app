import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'my-todo-list',
  styleUrl: 'todo-list.scss'
})
export class TodoList {
  @State() todos: any;
  @State() newTodo;

  componentWillLoad() {
    this.todos = [{ id: 1, value: 2 }];
  }

  @Listen('removeTodo')
  removeTodo(event) {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== event.detail;
    });
  }

  @Listen('updateTodo')
  updateValue(event) {
    const todos = this.todos.concat([]);

    let todoToUpdate = todos.filter((todo) => {
      return todo.id === event.detail.id;
    })[0];

    todoToUpdate.value = event.detail.value;

    this.todos = todos;
  }

  updateNewTodo(newTodo) {
    this.todos = [...this.todos, { id: Date.now(), value: newTodo.value }];
  }

  render() {
    return (
      <div>
        <input onChange={e => this.updateNewTodo(e.target)}/>

        <ul>
          {this.todos.map((todo) => {
            return <my-todo
              value={todo.value}
              id={todo.id}></my-todo>
          })}
        </ul>
      </div>
    );
  }
}
