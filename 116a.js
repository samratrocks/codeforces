const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
 
let first = true;
const data = []; // Array of arrays denoting each stop
rl.on('line', line => {
    if (first) {
      first = false;
      return;
    }
    const input = line.split(' ');
    data.push([Number(input[0]), Number(input[1])]);
})

rl.on('close', () => {
  console.log(solution(data));
});

// Solution:
// data => [[numberToExit, numberToEnter], ...]
function solution(data) {
  // What is the maximum at any point
  let max = 0;
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    const exitingPassengers = data[i][0];
    const newPassengers = data[i][1];
    total = total - exitingPassengers + newPassengers;

    if (total > max) {
      max = total;
    }
  }
  return max;
}