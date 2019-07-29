import { expect } from 'chai';
import { sum, sub, mult, div } from "../src/calc";

describe("Calc", () => {

  // Não é ESTRITAMENTE necessário
  describe("Smoke Tests", () => {
    it("should have 'sum' method", () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it("should have 'sub' method", () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it("should have 'mult' method", () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it("should have 'div' method", () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe("Sum", () => {
    it("should return 4 when sum(2, 2)", () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe("Sub", () => {
    it("should return 4 when sub(6, 2)", () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it("should return -4 when sub(6, 10)", () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe("Mult", () => {
    it("should return 4 when mult(2, 2)", () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe("Div", () => {
    it("should return 2 when div(4, 2)", () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it("should return 'Não é possível divisão por zero' when divided by zero", () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero');
    });
  });

});
