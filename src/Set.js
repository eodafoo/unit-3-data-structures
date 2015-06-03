function Set() {
	this.data = [];
}

// adds an object to the set
// does not add an object to the set if object is already present
Set.prototype.add = function (value) {
	if(this.data.indexOf(value) == -1){
		this.data[this.data.length] = value;
	}
	return this.data.length;
}

// returns true if the value is contained in the set
Set.prototype.contains = function (value) {
	if(this.data.indexOf(value) != -1){
		return true;
	}
	return false;
}

// removes value from the set if present
Set.prototype.remove = function (value) {
	if(this.contains(value)){
		var i = this.data.indexOf(value);
		for(i; i < this.data.length; i++){
			this.data[i] = this.data[i+1]; 
		}
		this.data.length--;
	}
	return this.data;
}