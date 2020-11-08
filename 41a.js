const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let first = true;
let s = '';
let t = '';
rl.on('line', (line) => {
    if (first) {
        first = false;
        s = line;
        return;
    } else {
        first = true;
        t = line;
        console.log(solution(s, t));
        return;
    }
});


function solution(first, second) {
    // Let's reverse without using an api since that
    // is kinda the point of this challenge
    if (first.length !== second.length) {
        return "NO";
    }
    for (let i = 0; i < first.length; i++) {
        let j = (first.length - 1) - i;
        if (first[i] !== second[j]) {
            return "NO";
        }
    }
    return "YES";
}
