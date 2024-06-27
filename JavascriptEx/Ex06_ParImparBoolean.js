console.log("\nExercício 06 - Num = Par/Ímpar Positivo/Negativo ");

const leia = require('readline-sync');

let numero = leia.questionInt("\nDigite um numero: ");

//Verifica o resto
let resto = (numero % 2 === 0) ? 'par' : 'impar';

// Verificar se o número é positivo, negativo ou zero
let sinal;
if (numero > 0) {
  sinal = 'positivo';
} else if (numero < 0) {
  sinal = 'negativo';
} else {
  sinal = 'neutro';
}

console.log(`\nO Número ${numero} é ${resto} e ${sinal}!`);