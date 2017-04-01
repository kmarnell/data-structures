var BinarySearchTree = function(value) {

  var bsTree = Object.create(binaryTreePrototype);
  bsTree.value = value;
  bsTree.left = null;
  bsTree.right = null;
  return bsTree;
  };

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val) {
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    // do nothing: The tree already contains this value
  }
};

binaryTreePrototype.contains = function(val) {
  if (val === this.value) {
    return true;
  } else if (val < this.value) {
    return !!(this.left && this.left.contains(val));
  } else if (val > this.value) {
    return !!(this.right && this.right.contains(val));
  }
};

binaryTreePrototype.depthFirstLog = function(callback) {
  callback(this.value)

  if(this.left) {
    return this.left.depthFirstLog(callback);
  } else if(this.right)  {
    return this.right.depthFirstLog(callback);
  }  
}



/*
 * Complexity: What is the time complexity of the above functions?
 */