const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
 
rl.on('line', line => {
    input = parseInt(line);
    solution(input);
})
 
function solution(w) {
    for (i = 2; i <= w / 2; i ++) {
        if (w % i === 0) {
            if (i % 2 === 0 && (w - i) % 2 === 0) {
                console.log('YES');
                return;
            } 
 
        }
    }
    
    console.log('NO');
}