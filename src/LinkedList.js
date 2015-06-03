function LinkedList() {
  this.head = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.push = function() {
	if(this.head === null)
	{
		this.head = new Node(arguments[0]);
	}
	else
	{
		var current = this.head;
		while(current.next !== null)
		{
			current = current.next;
		}
		current.next = new Node(arguments[0]);
	}
}