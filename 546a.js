const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
 
rl.on('line', line => {
    const input = line.split(' ');
    console.log(solution(input));
})

l = console.log;
e = process.exit;

function solution(input) {
    const cost = Number(input[0]);
    const money = Number(input[1]);
    const numberOfBananas = Number(input[2]);
    let total = 0;
    // The banana cost keeps going up
    // k for the first, 2k for the second
    // so let's run an accumulator for this
    for (let i = 1; i <= numberOfBananas; i++) {
        total += i * cost;
    }

    if (total > money) {
        return total - money;
    } else {
        return 0;
    }
}

// Input = 3 17 4
// Output = 13