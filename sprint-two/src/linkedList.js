var LinkedList = function() {
  var list = {}
  list.head = null;
  list.tail = null;



  list.addToTail = function(value) {
    
    //if the list is empty, add a value and point it to the tail
    if(list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    if(list.head === null) {
      return null;
    } else {
      var removed = list.head.value;
      var newHead = list.head.next;
      delete list.head
      list.head = newHead;
    }
    return removed;
  };

  list.contains = function(target) {
    //if head value has target, return true
    var current = list.head;
    while(current !== null) {
      if(current.value === target) {
        return true;
      } else {
        current = current.next;
      } 
    }  
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
