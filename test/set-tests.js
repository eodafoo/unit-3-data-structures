var set;
describe('Set', function() {
  beforeEach(function() {
    set = new Set();
  });

  it('should add values to set', function() {
    set.add(0);
    set.add(1);
    expect(set.contains(0)).to.be.true;
    expect(set.contains(1)).to.be.true;
    expect(set.contains(2)).to.be.false;
  });

  it('should remove values from set', function() {
    set.add(0);
    set.add(1);
    set.add(2);
    expect(set.contains(0)).to.be.true;
    expect(set.contains(1)).to.be.true;
    expect(set.contains(2)).to.be.true;
    set.remove(2);
    expect(set.contains(0)).to.be.true;
    expect(set.contains(1)).to.be.true;
    expect(set.contains(2)).to.be.false;
    set.remove(1);
    expect(set.contains(0)).to.be.true;
    expect(set.contains(1)).to.be.false;
    expect(set.contains(2)).to.be.false;
    set.remove(0);
    expect(set.contains(0)).to.be.false;
    expect(set.contains(1)).to.be.false;
    expect(set.contains(2)).to.be.false;
  });

  it('should not contain any repeated values', function() {
    set.add(0);
    set.add(0);
    expect(set.contains(0)).to.be.true;
    set.remove(0)
    expect(set.contains(0)).to.be.false;
  });


});