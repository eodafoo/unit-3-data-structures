var queue;
describe('Queue', function() {

  beforeEach(function() {
    queue = new Queue();
  });

  // add test for methods
  it('so')
// disable array methods
 // add test for instance
 // fix pop nad push name
  it('should push elements to queue', function() {
    queue.push(0);
    expect(queue.pop()).to.eql(0);
  });

  it('should pop most recently pushed elements', function() {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).to.eql(1);
    expect(queue.dequeue()).to.eql(2);
  });

  it('should return undefined when popping empty queue', function() {
    expect(queue.dequeue()).to.eql(undefined);
    queue.enqueue(0);
    queue.enqueue(1);
    expect(queue.dequeue()).to.eql(0);
    expect(queue.dequeue()).to.eql(1);
  });

});