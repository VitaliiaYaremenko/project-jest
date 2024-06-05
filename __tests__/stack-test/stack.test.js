import makeStack from './../../src/scripts/stack.js';

test("stack's main flow", () => {
    const stack = new makeStack();
    stack.push('one');
    stack.push('two');

    expect(stack.pop()).toEqual('two');
    expect(stack.pop()).toEqual('one');
});


test('isEmpty', () => {
    const stack = new makeStack();
    expect(stack.isEmpty()).toBe(true);
    stack.push('two');
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
});

test('pop in empty stack', () => {
    const stack = new makeStack();
    expect(() => stack.pop()).toThrow();
});
