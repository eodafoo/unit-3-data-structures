function HashTable() {
  this.SIZE = 16;

  // the array will be instantiated as [undefined, undefined....]
  // pop() and push() shouldn't be used on the storage
  this.storage = new Array(this.SIZE);
}

// stores a value in the storage array
// hint: use the hash function to determine where in the array to store the value
HashTable.prototype.set = function(key, value) {
  const index = hashCode(key,this.SIZE);
  if (this.storage[index]===undefined){
    this.storage[index]=[];
  }
  for (let keyValue of this.storage[index]){
    if (keyValue[0]===key){
      keyValue[1]= value;
      return;
    }
  }
  this.storage[index].push([key,value]);
  return;
}; 

// return a previously stored value
HashTable.prototype.get = function(key) {
  const index = hashCode(key, this.SIZE);
  let resultArr = [];
  if (this.storage[index]){
    resultArr = this.storage[index];
  }else return undefined;
  for (let result of resultArr){
    if (result[0] === key){
      return result[1];
    }
  }
  return undefined;
};

// returns and removes a key from the hash table
HashTable.prototype.remove = function(key) {
  const seats = hashCode(key, this.SIZE);
  // console.log(`index: ${index}`);
  
  for (let i = 0; i < this.storage[seats].length; i++) {
    if (key === this.storage[seats][i][0]) {
      let result = this.storage[seats][i][1]; 
      this.storage[seats].splice(i,1);
      return result;
    }
  }
};

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size){
  let hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    const letter = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size ;
}

const ht = new HashTable();
ht.set('a',1);
ht.set('b',2);
ht.remove();
