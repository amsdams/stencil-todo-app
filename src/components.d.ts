/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */




declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  BookList as MyBookList
} from './components/book-list/book-list';

declare global {
  interface HTMLMyBookListElement extends MyBookList, HTMLStencilElement {
  }
  var HTMLMyBookListElement: {
    prototype: HTMLMyBookListElement;
    new (): HTMLMyBookListElement;
  };
  interface HTMLElementTagNameMap {
    "my-book-list": HTMLMyBookListElement;
  }
  interface ElementTagNameMap {
    "my-book-list": HTMLMyBookListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-book-list": JSXElements.MyBookListAttributes;
    }
  }
  namespace JSXElements {
    export interface MyBookListAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  Book as MyBook
} from './components/book/book';

declare global {
  interface HTMLMyBookElement extends MyBook, HTMLStencilElement {
  }
  var HTMLMyBookElement: {
    prototype: HTMLMyBookElement;
    new (): HTMLMyBookElement;
  };
  interface HTMLElementTagNameMap {
    "my-book": HTMLMyBookElement;
  }
  interface ElementTagNameMap {
    "my-book": HTMLMyBookElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-book": JSXElements.MyBookAttributes;
    }
  }
  namespace JSXElements {
    export interface MyBookAttributes extends HTMLAttributes {
      id?: string;
      value?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
