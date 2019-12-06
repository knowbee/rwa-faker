const person = require("./data/rw");
const { randomizr } = require("./helpers");
const generator = {
  /**
   * generate first name in rwanda native language.
   * @param {number} n - if n is given, function generate array of n strings of first names.
   * @return {array|string} Function returns either a string or array of strings, maximum is a 100.
   */
  firstName: n => {
    if (n && typeof n !== "number") {
      return "failed, wrong input";
    }
    if (n && typeof n === "number" && n < 101) {
      return person.name.first_name
        .sort(() => Math.random() - 0.5)
        .splice(0, n);
    }
    return person.name.first_name[randomizr(person.name.first_name)];
  },
  /**
   * generate last name in rwanda native language.
   * @param {number} n - if n is given, function generate array of n strings of last names.
   * @return {array|string} Function returns either a string or array of strings.
   */
  lastName: n => {
    if (n && typeof n !== "number") {
      return "failed, wrong input";
    }
    if (n && typeof n === "number" && n < 101) {
      return person.name.last_name.sort(() => Math.random() - 0.5).splice(0, n);
    }
    return person.name.last_name[randomizr(person.name.last_name)];
  }
};

module.exports = generator;
