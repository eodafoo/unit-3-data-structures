function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function(value) {
	if(value < this.value){
		if(this.left != null){
			this.left.add(value);
		} else {
			this.left = new BinarySearchTree(value);
		}
	} else {
		if(this.right != null){
			this.right.add(value);
		} else {
			this.right = new BinarySearchTree(value);
		}
	}
}

BinarySearchTree.prototype.contains = function(value) {
	if(value === this.value){
		return true;
	} else if(value < this.value) {
		if(this.left != null && this.left.contains(value)){
			return true;
		}
	} else {
		if(this.right != null && this.right.contains(value)){
			return true;
		}
	}
	return false;
}

// applies the callback in the order of depth first
BinarySearchTree.prototype.depthFirstLog = function(callback) {
	callback(this.value);
	if(this.left != null){
		this.left.depthFirstLog(callback);
	}
	if(this.right != null){
		this.right.depthFirstLog(callback);
	}
}