const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let first = true;

rl.on('line', line => {
    if (first) {
        first = false;
    } else {
        solution(line);
    }
});

function solution(line) {
    let previous = line[0];
    let repeat = 0;
    for (let i = 1; i < line.length; i++) {
        while (line[i] === previous) {
            repeat++;
            i++;
        }
        previous = line[i];
    }

    console.log(repeat);
}