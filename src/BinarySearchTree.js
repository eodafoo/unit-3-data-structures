function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function(value) {
  const newnode = new BinarySearchTree(value);
  let curr = this;
  while ((value > curr.value && curr.right !== null)||(value < curr.value && curr.left !== null)){
    if (value > curr.value){
      curr = curr.right;
    }else{
      curr = curr.left;
    }
  }
  if (value > curr.value){
    curr.right = newnode;
  }else {
    curr.left = newnode;
  }
};

BinarySearchTree.prototype.contains = function(value) {
  let curr = this;
  if (curr.value===value){
    return true;
  }
  while ((value > curr.value && curr.right !== null)||(value < curr.value && curr.left !== null)){
    if (value > curr.value){
      curr = curr.right;
    }else{
      curr = curr.left;
    }
    if (curr.value === value){
      return true;
    }
  }
  return false;
};

// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function(callback) {
  if (this){
    callback(this.value);
  }
  if (this.left){
    this.left.depthFirstPre(callback);
  }
  if (this.right){
    this.right.depthFirstPre(callback);
  }

  // let curr = this;
  // if (curr === null){
  //   return;
  // }

  // if (curr) {
  //   callback(this.value);
  //   callback(this.left);
  //   callback(this.right);
  // }
  // this.depthFirstPre(callback(curr.value));
  // this.depthFirstPre(callback(curr.left.value));
  // this.depthFirstPre(callback(curr.right.value));
};

// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function(callback) {
  if (this.left) {
    this.left.depthFirstIn(callback);
  }
  if (this){
    callback(this.value);
  }
  if (this.right) {
    this.right.depthFirstIn(callback);
  }

};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function(callback) {
  if (this.left) {
    this.left.depthFirstPost(callback);
  }

  if (this.right) {
    this.right.depthFirstPost(callback);
  }

  if (this){
    callback(this.value);
  }

};

// applies the callback in the order of breath first (level order)
BinarySearchTree.prototype.breadthFirst = function(callback) {
  const q = [];
  if (!this){
    return;
  }
  let curr = this;
  q.push(curr);
  while (q.length !== 0){
    let curr = q.shift();
    if(curr.left){
      q.push(curr.left);
    }
    if(curr.right){
      q.push(curr.right);
    }
    callback(curr.value);
  }
};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function() {
  let curr = this;
  while(curr.left !== null){
    curr = curr.left;
  }
  return curr.value;
};

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function() {
  let curr = this;
  while(curr.right !== null){
    curr = curr.right;
  }
  return curr.value;

};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function() {
  const q = [];
  let level = 0;
  if (!this){
    return;
  }
  let curr = this;
  q.push(curr);
  while (q.length !== 0){
    let curr = q.shift();
    level++;
    if(curr.left){
      q.push(curr.left);
    }
    if(curr.right){
      q.push(curr.right);
    }
  }
  return level;
};

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function(item) {
  
};
