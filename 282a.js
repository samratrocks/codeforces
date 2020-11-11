/**
 * @fileOverview
 * @name 282a.js
 * @author Samrat Shiwakoti
 * @license MIT!
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let first = true;
let total = 0;
rl.on('line', line => {
    if (first === true) {
        first = false;
    }
    input = line;
    solution(input, total);
});

rl.on('close', () => {
    console.log(total);
});

function solution(input) {
    const operator = input[1];

    if (operator === '+') {
        total += 1;
    } else if (operator === '-') {
        total -= 1;
    }
}
