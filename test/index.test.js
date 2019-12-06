const chai = require("chai");
const { rwafaker } = require("../index");
const expect = chai.expect;

describe("rwafaker", () => {
  describe("generate random first name", () => {
    it("should return a random first name", function() {
      const name = rwafaker.firstName();
      expect(name).to.be.a("string");
    });
  });
});
