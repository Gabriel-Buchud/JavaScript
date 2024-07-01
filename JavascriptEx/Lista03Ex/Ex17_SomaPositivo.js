console.log("\nExercício 17 - Soma apenas números positivos ");

const leia = require('readline-sync');

let soma = 0;
let numero;

do {
  numero = leia.questionInt('Digite um numero: ');

  if (numero > 0) {
    soma += numero;
  }else if(numero == 0){
break;
  }
}
while( numero !== 0)
console.log('A soma dos números positivos é: ' + soma);