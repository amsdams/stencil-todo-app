import { flush, render } from '@stencil/core/testing';
import { bookList } from './book-list';

describe('book-list', () => {
  it('should build', () => {
    expect(new bookList()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [bookList],
        html: '<my-book-list></my-book-list>'
      });
    });

  /*  it('should work without parameters', () => {
		console.log('element'+element);
    });
*/
    
  });
});