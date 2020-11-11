const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
    solution(line);
});

function solution(line) {
    console.log(line[0].toUpperCase() + line.slice(1))
}