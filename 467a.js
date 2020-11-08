const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let first = true;
const rooms = [];
rl.on('line', line => {
    if (first) {
        first = false;
        return;
    }

    const input = line.split(' ');
    rooms.push(input);
});

rl.on('close', () => console.log(solution(rooms)));



function solution(rooms) {
    let numberOfAvailableRooms = 0;
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];
        let freeSpaceInRoom = room[1] - room[0];
        if (freeSpaceInRoom > 1) {
            numberOfAvailableRooms++;
        }
    }

    return numberOfAvailableRooms;
}