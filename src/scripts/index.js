import makeStack from "./stack.js";

const stack = new makeStack();
console.log(stack.isEmpty()); // true
console.log(stack.push(1)); // (1)
console.log(stack.push(2)); // (1, 2)
console.log(stack.push(3)); // (1, 2, 3)
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 3. В стеке (1, 2)
console.log(stack.pop()); // 2. В стеке (1)
console.log(stack.pop()); // 1. В стеке пусто
console.log(stack.isEmpty()); // true
