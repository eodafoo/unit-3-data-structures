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
  if (this.head === null){
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
  newNode.next = this.head;
  this.head = newNode;
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {
  const newNode = new Node(value);

  // ✅ 情况 1：空链表，或者插入到头部
  if (this.head === null || position <= 0) {
    newNode.next = this.head;
    this.head = newNode;
    return;
  }

  let curr = this.head;
  let index = 0;

  // ✅ 遍历链表直到找到插入位置前一个节点，或到达链表末尾
  while (curr.next !== null && index < position - 1) {
    curr = curr.next;
    index++;
  }

  // ✅ 将新节点插入到 curr 和 curr.next 之间
  newNode.next = curr.next;
  curr.next = newNode;
};
const ll = new LinkedList();
ll.push('a');
ll.addToHead('Head');
console.log(ll);
console.log(ll.contains('Head'));
ll.insert('I',1);
console.log(ll);
// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {

};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};
