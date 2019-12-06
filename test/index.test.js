const chai = require("chai");
const { rwafaker } = require("../index");
const expect = chai.expect;

describe("rwafaker", async () => {
  describe("generate random first name", () => {
    it("should return a random first name", function() {
      const name = rwafaker.firstName();
      expect(name).to.be.a("string");
    });
    it("should return 5 random first names", function() {
      const name = rwafaker.firstName(5);
      expect(name).to.be.a("array");
      expect(name.length).to.equal(5);
    });
    it("should fail", function() {
      const name = rwafaker.firstName("5");
      expect(name).to.equal("failed, wrong input");
    });
  });
  describe("generate random last name", () => {
    it("should return a random last name", function() {
      const name = rwafaker.lastName();
      expect(name).to.be.a("string");
    });
    it("should return 5 random last names", function() {
      const name = rwafaker.lastName(5);
      expect(name).to.be.a("array");
      expect(name.length).to.equal(5);
    });
    it("should fail", function() {
      const name = rwafaker.lastName("5");
      expect(name).to.equal("failed, wrong input");
    });
  });
  describe("generate random email", () => {
    it("should return a random email", function() {
      const email = rwafaker.email();
      expect(email).to.be.a("string");
    });
    it("should return 5 random emails", function() {
      const email = rwafaker.email(5);
      expect(email).to.be.a("array");
      expect(email.length).to.equal(5);
    });
    it("should fail", function() {
      const email = rwafaker.email("5");
      expect(email).to.equal("failed, wrong input");
    });
  });
  describe("generate full name", () => {
    it("should return a random fullname", function() {
      const full_name = rwafaker.fullName();
      expect(full_name).to.be.a("string");
    });
    it("should return 5 random fullnames", function() {
      const full_name = rwafaker.fullName(5);
      expect(full_name).to.be.a("array");
      expect(full_name.length).to.equal(5);
    });
    it("should fail", function() {
      const full_name = rwafaker.fullName("5");
      expect(full_name).to.equal("failed, wrong input");
    });
  });
});
