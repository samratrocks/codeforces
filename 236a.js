const readline = require('readline');
const matrix = [];


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', lineInput => {
    makeMatrix(lineInput)
});

rl.on('close', () => console.log(solution(matrix)));


function makeMatrix(line) {
    const row = line.split(' ').map(char => Number(char));
    matrix.push(row);
}


function solution(matrix) {
// Get the matrix from the input and put it into a data structure
// Count the minimum number needed to make the matrix beautiful
    const index = getIndex(matrix);
    return (Math.abs(2 - index[0]) + Math.abs(2 - index[1]));

}


// Finds and returns the index of '1'
function getIndex(matrix) {
    let x = 0, y = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) { 
            if (matrix[i][j] === 1) {
                return [i, j];
            }
        }
    }
}
