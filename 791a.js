const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
    const input = line.split(' ');
    console.log(solution(Number(input[0]), Number(input[1])));
});


function solution(weightLimak, weightBob) {
    let count = 0;
    while(weightLimak <= weightBob) {
        count++;
        weightLimak *= 3;
        weightBob *= 2;
    }

    return count;
}

