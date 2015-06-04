var list;
describe('LinkedList', function() {

  beforeEach(function() {
    list = new LinkedList();
  });

  it('should have a push method', function() {
    expect(list.push).to.be.a('function');
    expect(list.addToHead).to.be.a('function');
  });

  it('should have head set to null when list is made', function() {
    expect(list.head).to.eql(null);
  });

  it('should push first element to head', function() {
    list.push(5);
    expect(list.head.value).to.eql(5);
    expect(list.head.next).to.eql(null);
  });

  it('should push multiple elements', function() {
    list.push(0);
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.head.value).to.eql(0);
    expect(list.head.next.value).to.eql(1);
    expect(list.head.next.next.value).to.eql(2);
    expect(list.head.next.next.next.value).to.eql(3);
    expect(list.head.next.next.next.next).to.eql(null);
  });

  it('should add value to head', function() {
    list.push(0);
    list.push(1);
    list.push(2);
    expect(list.head.value).to.eql(0);
    expect(list.head.next.value).to.eql(1);
    expect(list.head.next.next.value).to.eql(2);
    expect(list.head.next.next.next.next).to.eql(null);
    list.addToHead(3);
    expect(list.head.value).to.eql(3);
    expect(list.head.next.value).to.eql(0);
    expect(list.head.next.next.value).to.eql(1);
    expect(list.head.next.next.next.value).to.eql(2);
    expect(list.head.next.next.next.next).to.eql(null);
    list.addToHead(4);
    expect(list.head.value).to.eql(4);
    expect(list.head.next.value).to.eql(3);
    expect(list.head.next.next.value).to.eql(0);
    expect(list.head.next.next.next.value).to.eql(1);
    expect(list.head.next.next.next.next.value).to.eql(2);
    expect(list.head.next.next.next.next.next).to.eql(null);
  });

});