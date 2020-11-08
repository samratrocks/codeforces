const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let first = true;
let n, t, s;


rl.on('line', (line) => {
    if (first) {
        // We're getting the numbers
        const input = line.split(' ');
        input.forEach(char => Number(char));
        n = input[0], t = input[1];
        first = false;
        return;
    } else {
        // We're getting the string
        s = line;
    }

    console.log(solution(n, t, s));
});


function solution(numberOfChildren, seconds, arrangement) {
    const q = arrangement.split('');
    for (let i = 0; i < seconds; i++) {
        for (let j = 0; j < q.length - 1; j++) {
            if (q[j] === 'B' && q[j + 1] === 'G') {s
                q[j] = 'G', q[j + 1] = 'B';
                j += 1;
            }
        }
    }
    return q.join('');
}