var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.position = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

	queueMethods.enqueue = function(value){
    this.count++;
    this.position++;
    this.storage[this.position] = value;
  };

  queueMethods.dequeue = function(){
   if(this.count > 0){
   	var arrayOfKeys = Object.keys(this.storage);
   	var removed = this.storage[arrayOfKeys[0]];
   	delete this.storage[arrayOfKeys[0]];
   	this.count--;
   }
   return removed;
  }

  queueMethods.size = function(){
  	return this.count;
  };
