import { flush, render } from '@stencil/core/testing';
import { book } from './book';

describe('book', () => {
  it('should build', () => {
    expect(new Book()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [book],
        html: '<my-book></my-book>'
      });
    });

    /*it('should work without parameters', () => {
		console.log('element'+element);
    });*/

    
  });
});