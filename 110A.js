const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.on('line', (line) => {
    console.log(solution(line));
});

function solution(input) {
    let luckyDigits = 0;
    for (let i = 0 ; i < input.length; i++) {
        if (input[i] === '4' || input[i] === '7') {
            luckyDigits++;
        }
    }

    if (luckyDigits === 4 || luckyDigits === 7) {
        return 'YES';
    }
    return 'NO';
}