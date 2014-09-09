function Stack(values){
  this.values = values;
}

Stack.prototype.push = function(value){
  return this.values.push(value);
};

Stack.prototype.pop = function(){
  return this.values.pop();
};

Stack.prototype.peek = function(){
  var length = this.values.length;
  var index = length - 1;
  return this.values[index];
};

var stack = new Stack([1, 2, 3, 4, 5]);

console.log(stack.pop());
console.log(stack.values);
console.log(stack.push(6));
console.log(stack.values);
console.log(stack.pop());
console.log(stack.values);
console.log(stack.peek());
console.log(stack.values);
