const chai = require("chai");
const { rwafaker } = require("../index");
const expect = chai.expect;

describe("rwafaker", async () => {
  describe("generate random first name", () => {
    it("should return a random first name", function() {
      const name = rwafaker.firstName();
      expect(name).to.be.a("string");
    });
  });
  describe("generate random last name", () => {
    it("should return a random last name", function() {
      const name = rwafaker.lastName();
      expect(name).to.be.a("string");
    });
  });
  describe("generate random email", () => {
    it("should return a random email", function() {
      const email = rwafaker.email();
      expect(email).to.be.a("string");
    });
  });
});
