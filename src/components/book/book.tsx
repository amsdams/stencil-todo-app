import { Component, Prop, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-book',
  styleUrl: 'book.scss'
})
export class Book {

  @Event() removeBook: EventEmitter;
  @Event() updateBook: EventEmitter;

  @Prop() value: string;
  @Prop() id: string;

  @State() isEditable = false;

  deleteThisBook = () => {
    this.removeBook.emit(this.id);
  }

  viewThisBook = () => {
   
  }
  
  editThisBook = () => {
    this.isEditable = !this.isEditable;
  }
  
  updateThisBook(value) {
    this.updateBook.emit({value: value, id: this.id});
  }

  toggleEdition = () => {
    this.isEditable = !this.isEditable;
  }

  handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      this.updateThisBook(e.target.value);
      this.isEditable = false;
    }
  }

  render() {
    let bookTemplate;

    if (!this.isEditable) {

      bookTemplate = <div>
        {this.value}
        
        <button onClick = {this.viewThisBook}>
          View
        </button>
        
        <button onClick = {this.editThisBook}>
          Edit
        </button>
        
        
        <button onClick = {this.deleteThisBook}>
          Delete
        </button>
      </div>

    } else {

      bookTemplate = <div>
        <input value={this.value} onKeyDown={this.handleKeyDown} />
      </div>
    }

    return (
      <li onDblClick= {this.toggleEdition}>
        {bookTemplate}
      </li>
    );
  }
}
