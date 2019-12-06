// generate a random index
exports.randomizr = obj => {
  return Math.floor(Math.random() * (obj.length - 1)) + 1;
};

// shuffle array
exports.shuffler = array => {
  return array.sort(() => Math.random() - 0.5);
};
