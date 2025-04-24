function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function(value) {
  const newNode = new Node(value);
  if (head === null){
    this.head = newNode;
    this.tail = newNode;
  }else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  return;
};

// returns true if value is present in the list
LinkedList.prototype.contains = function(value) {
  let current = this.head;
  while(current !== null){
    if (current.value === value){
      return true;
    }
    current = current.next;
  }
  return false;
};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value);
  

};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {

};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {

};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};
