// do not use any native array methods
function Stack() {
	this.data = [];
}

Stack.prototype.push = function(value) {
	this.data[this.data.length] = value;
	return this.data.length;
}

Stack.prototype.pop = function() {
	if(this.data.length === 0)
	{
		return undefined;
	}
	var temp = this.data[this.data.length-1];
	this.data.length--;
	return temp;
}