// do not use any native array methods
function Queue() {
    this.storage = {}
    this.index = 0;
}

Queue.prototype.enqueue = function(value) {
    this.storage[this.index] = value;
    this.index++;
};

Queue.prototype.dequeue = function() {
    let dequeueVal = this.storage[0];
    delete this.storage[0];
    for (let index in this.storage){
        let temp = this.storage[index];
        this.storage[index - 1] = temp;
        delete this.storage[index];
    }
    this.index--;
    return dequeueVal;
};

let q = new Queue;
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('d');
console.log(q);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);

