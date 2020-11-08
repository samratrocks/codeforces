const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let first = true;
let alternating = 0;

rl.on('line', line => {
    if (first) {
        first = false;
        return;
    }

    if (alternating === 0) {
         alternating = 1;
        return;
    } else if (alternating === 1) {
        alternating = 0;
        console.log(solution(line));
    }
});


function solution(line) {
    
}
