describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "add", "contains", "depthFirstPre", "depthFirstIn", "depthFirstPost", "breadthFirst"', function() {
    expect(binarySearchTree.add).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstIn).to.be.a("function");    
    expect(binarySearchTree.depthFirstPost).to.be.a("function");
    expect(binarySearchTree.depthFirstPre).to.be.a("function");
    expect(binarySearchTree.breadthFirst).to.be.a("function");
  });

  it('should add values at the correct location in the tree', function(){
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstPre"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstPre(func);
    expect(array).to.eql([5,2,3,6,7]);
  });

  it('should execute a callback on every value in a tree using "depthFirstIn"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstIn(func);
    expect(array).to.eql([2,3,5,6,7]);
  });

  it('should execute a callback on every value in a tree using "depthFirstPost"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstPost(func);
    expect(array).to.eql([ 2, 3, 6, 7, 5 ]);
  });

  it('should execute a callback on every value in a tree using "breadthFirst"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.breadthFirst(func);
    expect(array).to.eql([5,2,7,3,6]);
  });
});
