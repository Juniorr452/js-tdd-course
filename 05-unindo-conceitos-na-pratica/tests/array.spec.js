var expect = require("chai").expect;

describe("Array", () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // Smoke test - testar tipos ou se existe
  it("should be an array", () => {
    expect(arr).to.be.a('array');
  });

  it("should have a size of 4 when another value is pushed into the array", () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it("should return true when 3 is popped from the array", () => {
    expect(arr.pop() === 3).to.be.true;
  });

  it("should have a size of 2 when a value is popped from the array", () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it("should remove 3 when pop is used", () => {
    arr.pop();
    expect(arr).to.not.include(3);
    expect(arr).to.have.lengthOf(2);
  });
});
