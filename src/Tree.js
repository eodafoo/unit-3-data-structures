function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.add = function(value) {
	this.children.push(new Tree(value));
}

Tree.prototype.contains = function(value) {
	if(this.value === value)
	{
		return true;
	}
	else
	{	
		for(var i = 0; i < this.children.length; i++)
		{
			if(this.children[i].contains(value))
			{
				return true;
			}
		}
	}
	return false;
}
