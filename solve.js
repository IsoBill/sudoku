const { read } = require('./read.js')

const array = read()
console.log(array);
function isNotInRow(arr, row, val) {
    for (let i = 0; i < 9; i++) {
        if (arr[row * 9 + i] === val) {
            return false;
        }
    }
    return true;
}



function isNotInCol(arr, col, val) {
    for (let i = 0; i < 9; i++) {
        if (arr[i * 9 + col] === val) {
            return false;
        }
    }
    return true;
}


function solve(arr) {
    for (let i = 0; i < 81; i++) {
        if (arr[i] === 0) {
            const row = Math.floor(i / 9);
            const col = i % 9;

            for (let val = 1; val <= 9; val++) {
                if (isNotInRow(arr, row, val) && isNotInCol(arr, col, val)) {
                    arr[i] = val;
                    if (solve(arr)) {
                        return true;
                    }
                    arr[i] = 0;
                }
            }
            return false;
        }
    }
    return true;
}


solve(array)
console.log(array);


module.exports ={
    solve,
}

