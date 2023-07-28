const input = require('readline-sync');

let valor: number = input.question('digite o numero: ');

for(let i = 0; i <=valor ; i = i +2){
    console.log(i);
}