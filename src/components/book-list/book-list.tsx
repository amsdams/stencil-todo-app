import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'my-book-list',
  styleUrl: 'book-list.scss'
})
export class BookList {
  @State() books: any;
  @State() newBook;

  componentWillLoad() {
    this.books = [{ id: 1, value: 2 }];
  }

  @Listen('removeBook')
  removeBook(event) {
    this.books = this.books.filter((book) => {
      return book.id !== event.detail;
    });
  }

  @Listen('updateBook')
  updateValue(event) {
    const books = this.books.concat([]);

    let bookToUpdate = books.filter((book) => {
      return book.id === event.detail.id;
    })[0];

    bookToUpdate.value = event.detail.value;

    this.books = books;
  }

  updateNewBook(newBook) {
    this.books = [...this.books, { id: Date.now(), value: newBook.value }];
  }

  render() {
    return (
      <div>
        <input onChange={e => this.updateNewBook(e.target)}/>

        <ul>
          {this.books.map((book) => {
            return <my-book
              value={book.value}
              id={book.id}></my-book>
          })}
        </ul>
      </div>
    );
  }
}
