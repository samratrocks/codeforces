const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
    const inputs = line.split(' ');
    const first = parseInt(inputs[0]);
    const second = parseInt(inputs[1]);
    solution(first, second);
});

function solution(m, n) {
    // Domino size is 2 x 1
    // m x n square
    // How many would fit?
    console.log(m, n);
}