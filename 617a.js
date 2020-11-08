const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (line) => {
    const x = Number(line);
    const r = x % 5;
    const q = (x - r) / 5;
    const z = r ? 1 : 0;
    console.log(q + z);
});
