import { Component, Prop, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-todo',
  styleUrl: 'todo.scss'
})
export class Todo {

  @Event() removeTodo: EventEmitter;
  @Event() updateTodo: EventEmitter;

  @Prop() value: string;
  @Prop() id: string;

  @State() isEditable = false;

  removeThisTodo = () => {
    this.removeTodo.emit(this.id);
  }

  updateThisTodo(value) {
    this.updateTodo.emit({value: value, id: this.id});
  }

  toggleEdition = () => {
    this.isEditable = !this.isEditable;
  }

  handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      this.updateThisTodo(e.target.value);
      this.isEditable = false;
    }
  }

  render() {
    let todoTemplate;

    if (!this.isEditable) {

      todoTemplate = <div>
        {this.value}
        <button onClick = {this.removeThisTodo}>
          X
        </button>
      </div>

    } else {

      todoTemplate = <div>
        <input value={this.value} onKeyDown={this.handleKeyDown} />
      </div>
    }

    return (
      <li onDblClick= {this.toggleEdition}>
        {todoTemplate}
      </li>
    );
  }
}
