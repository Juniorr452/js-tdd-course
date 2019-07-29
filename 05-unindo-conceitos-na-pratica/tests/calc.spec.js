var expect = require("chai").expect;
var calc = require("../src/calc.js");

describe("Calc", () => {

  // Não é ESTRITAMENTE necessário
  describe("Smoke Tests", () => {
    it("should exist calc lib", () => {
      expect(calc).to.exist;
    });

    it("should have 'sum' method", () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it("should have 'sub' method", () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it("should have 'mult' method", () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it("should have 'div' method", () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });

  describe("Sum", () => {
    it("should return 4 when sum(2, 2)", () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe("Sub", () => {
    it("should return 4 when sub(6, 2)", () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });

    it("should return -4 when sub(6, 10)", () => {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
  });

  describe("Mult", () => {
    it("should return 4 when mult(2, 2)", () => {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });
  });

  describe("Div", () => {
    it("should return 2 when div(4, 2)", () => {
      expect(calc.div(4, 2)).to.be.equal(2);
    });

    it("should return 'Não é possível divisão por zero' when divided by zero", () => {
      expect(calc.div(4, 0)).to.be.equal('Não é possível divisão por zero');
    });
  });

});
