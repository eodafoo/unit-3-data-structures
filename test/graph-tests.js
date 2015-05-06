var graph;
describe('Graph', function() {
  beforeEach(function() {
    graph = new Graph(0);
  });

  it('should add edge to graph', function() {
    graph.addEdge(1);
    expect(graph.contains(1)).to.eql(true);
  });

});