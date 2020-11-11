const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
    solution(line);
});

function solution(name) {
    const charMap = {};
    for (const char of name) {
        if (charMap[char] === undefined) {
            charMap[char] = true;
        }
    }

    if (Object.keys(charMap).length % 2 === 0) {
        console.log('CHAT WITH HER!');
    } else {
        console.log('IGNORE HIM!');
    }
}