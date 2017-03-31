var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.position = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
	this.count++;
	this.position++;
	this.storage[this.position] = value;
};

Queue.prototype.dequeue = function() {
	if(this.count > 0) {
		var arrayOfKeys = Object.keys(this.storage);
		var removed = this.storage[arrayOfKeys[0]];
		delete this.storage[arrayOfKeys[0]];
		this.count --;
	}
	return removed;
}

Queue.prototype.size = function() {
	return this.count;
};

