var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};  
  var count = 0; 
  var position = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    position++;
    storage[position] = value;
  }

  someInstance.dequeue = function() {
    if(count > 0) {
      var arrayOfKeys = Object.keys(storage)   //['1'...]
      var removed = storage[arrayOfKeys[0]];
      delete storage[arrayOfKeys[0]];
      count--;  
    }
    return removed;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
