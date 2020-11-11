const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
    input.push(line);
});

rl.on('close', () => {
    solution(input[0], input[1]);
});

function solution(first, second) {
    for (let i = 0; i < first.length; i++) {
        if (first[i].toLowerCase() > second[i].toLowerCase()) {
            console.log('1');
            return;
        } else if (first[i].toLowerCase() < second[i].toLowerCase()) {
            console.log('-1');
            return;
        }
    }

    console.log('0');
    return;
}