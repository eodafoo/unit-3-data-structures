function HashTable() {
  this._storage = [];
  this._SIZE = 16;

}

HashTable.prototype.set = function(key, value) {
  var hashCode = key.hashCode(this._SIZE);
}

HashTable.prototype.get = function(key) {
  var hasCode = key.hashCode(this._SIZE);
}