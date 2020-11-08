'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// thats all what you have to write to get input from stdin, using readLine.


// Main code runs in main();


function main() {
    const parameterVariable = readLine();
    // const line2 = readLine();
    
    greeting(parameterVariable);
    greeting(line2);
}

function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable);
 // Write a line of code that prints parameterVariable to stdout using console.log:  
}