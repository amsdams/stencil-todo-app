import { flush, render } from '@stencil/core/testing';
import { TodoList } from './todo-list';

describe('todo-list', () => {
  it('should build', () => {
    expect(new TodoList()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TodoList],
        html: '<my-todo-list></my-todo-list>'
      });
    });

  /*  it('should work without parameters', () => {
		console.log('element'+element);
    });
*/
    
  });
});