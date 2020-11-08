const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let first = true;
rl.on('line', line => {
    if (first) {
        first = false;
        return;
    }

    console.log(solution(line));
});


function solution(line) {
    let gamesWonByAnton = 0;
    let gamesWonByDanik = 0;

    for (let i = 0; i < line.length; i++) {
        if (line[i] === 'A') {
            gamesWonByAnton++;
        } else if (line[i] === 'D') {
            gamesWonByDanik++;
        }
    }

    if (gamesWonByAnton > gamesWonByDanik) {
        return 'Anton';
    } else if (gamesWonByDanik > gamesWonByAnton) {
        return 'Danik';
    } else {
        return 'Friendship';
    }
}