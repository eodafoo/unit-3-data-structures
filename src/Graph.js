function Graph(value) {
  this.value = value;
  this.edges = [];
}

// creates another node (a node is another graph with its own value and edges) on the graph and adds it to the current edge
Graph.prototype.addNode = function(value) {

}

// returns true if the value is contained in the set
Graph.prototype.contains = function(value) {
	if(this.value === value)
	{
		return true;
	}
	else
	{
		for(var i = 0; i < this.edges.length; i++)
		{
			if(this.edges[i].contains(value))
			{
				return true;
			}
		}
	}
	return false;
}

