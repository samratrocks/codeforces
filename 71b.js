const readline = require('readline');
const { parse } = require('path');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
    const inputs = line.split(' ');
    solution(inputs[0]);
});

function solution(line) {
    console.log(line.split('+')
        .map(item => parseInt(item))
        .sort((a, b) => a - b)
        .join('+'));
    return;
}
