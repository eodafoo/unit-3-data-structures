// do not use any native array methods
function Queue() {
	this.queue = [];
}

Queue.prototype.enqueue = function(value) {
	this.queue[this.queue.length] = value;
	return this.queue.length;
}

Queue.prototype.dequeue = function() {
	if(this.queue.length == 0){
		return undefined;
	}
	var temp = this.queue[0];
	for(var i = 1; i < this.queue.length; i++){
		this.queue[i-1] = this.queue[i];
	}
	this.queue.length--;
	return temp;
}