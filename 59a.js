const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
    console.log(solution(line));
});


// Count the number of uppercase and lower case letters
// If numUpper > numLower turn everything into upper
// Else turn everything into lower
function solution(input) {
    const word = input.split('');
    let numUpper = 0, numLower = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            numUpper++;
        } else {
            numLower++;
        }
    }

    if (numUpper > numLower) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}
