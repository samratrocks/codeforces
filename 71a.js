const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let first = true;
rl.on('line', line => {
    if (first === true) {
        first = false;
    } else {
        input = line;
        console.log(solution(line));
    }
});

function solution(word) {
    if (word.length <= 10) {
        return word;
    }

    return word[0] + (word.length - 2) + word[word.length - 1];
}