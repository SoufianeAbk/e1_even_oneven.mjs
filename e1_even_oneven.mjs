import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = await userInput.question('Voeg een getal toe? ');
console.log(getal1);

if (getal1 % 2 == 0){
console.log('Je cijfer is even ');
} else {
    console.log('Je cijfer is oneven ');
}

process.exit();