var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};






var treeMethods = {};

treeMethods.addChild = function(value) {  
	var newChild = Tree(value);
	this.children.push(newChild);
};


treeMethods.contains = function(target) {
	var wasFound = false;

	var searchTree = function(node) {
		for(var i = 0; i < node.children.length; i++) {
			if(node.children[i].value === target) {
				wasFound = true;
			} else {
				searchTree(node.children[i]);
			}
		}
	}
	searchTree(this);
	return wasFound;
};
