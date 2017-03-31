var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  
  return someInstance;
};

var stackMethods = {};


stackMethods.push = function(value) {
    this.count++;
    this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var removed = this.storage[this.count];
  if(this.count > 0) {
    delete this.storage[this.count];
    this.count--;
  }
  return removed;
};

stackMethods.size = function() {
    return this.count;
};


