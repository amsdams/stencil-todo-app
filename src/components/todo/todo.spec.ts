import { flush, render } from '@stencil/core/testing';
import { Todo } from './todo';

describe('todo', () => {
  it('should build', () => {
    expect(new Todo()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [Todo],
        html: '<my-todo></my-todo>'
      });
    });

    /*it('should work without parameters', () => {
		console.log('element'+element);
    });*/

    
  });
});