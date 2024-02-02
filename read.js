const fs = require('fs');
const { EOL } = require('os');

const read = () => {
  return fs.readFileSync('./puzzles.txt', 'utf-8').slice(0, 82).replaceAll('-', '0').trim().split('').map((el) => Number(el));
  // const slc1 = slc.match(/.{9}|./g);
  // return slc1.map((el) => el.split(''));
};

// console.log(read())

module.exports = {
  read,
};


// 145 892 673
// 893 176 425
// 276 435 819

// 519 247 386
// 762 583 194
// 384 961 752

// 957 614 238
// 438 729 561
// 621 358 947
