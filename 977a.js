const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', line => {
    const input = line.split(' ').map(char => Number(char));        // Array of two numbers
    console.log(solution(input[0], input[1]));
});

// If n % 10 !== 0 (n is not divisible by 10) then n = n - 1 (subtract 1)
// If n % 10 === 0 (n is divisble by 10) then then n = n / 10 (divide by 10)

// There are k operation
// [?] Does dividing by 10 count as an operation?
function solution(n, k) {
    let num = n;
    let numberOfOperations = k;
    for (let i = 0; i < numberOfOperations; i ++) {
        if (num % 10 !== 0) {
            num -= 1
        } else {
            num = num / 10;
        }
    }

    return num;
}
