// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index]=value;
  this.index++;
};

Stack.prototype.pop = function() {
  let popVal = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return popVal;
};

const stack = new Stack();
stack.push('a');
stack.push('b');

console.log(stack.pop())
console.log(stack)