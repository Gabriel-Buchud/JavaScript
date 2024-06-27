console.log("\nExercício 05 - A + B maior, menor ou igual a C ")

//Chama a biblioteca redline-sync para dentro da variável leia
const leia = require('readline-sync');


// Solicitar a entrada de dados para os números A, B e C
let A = leia.questionInt("\nDigite o valor de A: ");
let B = leia.questionInt("Digite o valor de B: ");
let C = leia.questionInt("Digite o valor de C: ");

// Calcular a soma de A e B
let soma = A + B;

// Exibir a soma e compará-la com C
console.log(`\nValores: A = ${A}, B = ${B}, C = ${C}`);
console.log(`Soma: ${A} + ${B} = ${soma}`);

// Laço para verificar se a soma é maior, menor ou igual a C
if (soma > C) {
  console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
  console.log("A Soma de A + B é Menor do que C");
} else {
  console.log("A Soma de A + B é Igual a C");
}
