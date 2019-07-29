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

});
