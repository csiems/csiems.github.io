describe('pingPongIt', function() {
  it("will return pingpong if the number is divisible by 15", function() {
    expect(pingPongIt(45)).to.equal('pingpong');
  });

  it("will return ping if the number is divisible by 3", function() {
    expect(pingPongIt(9)).to.equal('ping');
  });

  it("will return pong if the number is divisible by 5", function() {
    expect(pingPongIt(25)).to.equal('pong');
  });

  it("will return the number if the number is not divisible by 3 or 5", function() {
    expect(pingPongIt(7)).to.equal(7);
  });

  it("will terminate/return nothing if number is less than 1", function() {
    expect(pingPongIt(-3)).to.equal();
  });

  it("will terminate/return nothing if number is 0", function() {
    expect(pingPongIt(0)).to.equal();
  });
});