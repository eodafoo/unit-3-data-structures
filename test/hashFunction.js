String.prototype.hashCode = function(size){
  var hash = 0;
  if (this.length == 0) return hash;
  for (i = 0; i < this.length; i++) {
    var letter = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash % size ;
}
