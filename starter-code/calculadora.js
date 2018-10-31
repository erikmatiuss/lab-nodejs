// Initial code
const readlineSync = require('readline-sync');
const {sum, Subtraccion, Multiplication, Division} = require ('./math');


const operations = ['sum', 'Substraction','Multiplication', 'Division' ];
const index = readlineSync.keyInSelect( operations, 'Witch operations do you want');
let firtsNumber
let secondNumber
if (index != -1) {
        firtsNumber = readlineSync.questionInt('Input firts number: ');
        secondNumber = readlineSync.questionInt('Input second number: ');
}

switch(index) {
    case 0:
    console.log(sum(firtsNumber, secondNumber));
    break;
    case 1:
    console.log(Substraction(firtsNumber, secondNumber));
    break;
    case 2:
    console.log(Multiplication(firtsNumber, secondNumber));
    break;
    case 3:
    console.log(Division(firtsNumber, secondNumber));
    break;
    default: 
    console.log('Nothing!');
    break;
}

