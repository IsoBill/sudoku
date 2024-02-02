const fs = require('fs');
const { EOL } = require('os');

const read = () => {
  const slc = fs.readFileSync('./puzzles.txt', 'utf-8').slice(0, 82);
  const replace = slc.replaceAll('-', '0').trim().match(/.{9}|./g);
  return replace.map((el) => el.split(''));
};

console.log (read())

module.exports = {
  read,
};
