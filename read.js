const fs = require('fs');
const { EOL } = require('os');

const read = () => fs.readFileSync('./puzzles.txt', 'utf-8');

// console.log(read());

module.exports = {
  read,
};
