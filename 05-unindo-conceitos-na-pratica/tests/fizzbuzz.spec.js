import { expect } from "chai";
import FizzBuzz from '../src/FizzBuzz';

describe("FuzzBuzz", () => {
  it("should return 'Fizz' when multiple of 3", () => {
    expect(FizzBuzz(3)).to.be.equal("Fizz");
    expect(FizzBuzz(6)).to.be.equal("Fizz");
  })

  it("should return 'Buzz' when multiple of 5", () => {
    expect(FizzBuzz(5)).to.be.equal("Buzz");
    expect(FizzBuzz(10)).to.be.equal("Buzz");
  })

  it("should return 'FizzBuzz' when multiple of 15", () => {
    expect(FizzBuzz(15)).to.be.equal("FizzBuzz");
    expect(FizzBuzz(30)).to.be.equal("FizzBuzz");
  })

  it("should return the number when non multiple", () => {
    expect(FizzBuzz(7)).to.be.equal(7);
    expect(FizzBuzz(19)).to.be.equal(19);
  })
});
