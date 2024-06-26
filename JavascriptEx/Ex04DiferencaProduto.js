console.log("\nExercício 04 - Diferença / Produtos")

const leia = require('readline-sync');

// Lê os quatro números (o console não está aceitando acento por isso número não está acentuado)
let n1 = leia.questionFloat("\nNumero 1: ");
let n2 = leia.questionFloat("Numero 2: ");
let n3 = leia.questionFloat("Numero 3: ");
let n4 = leia.questionFloat("Numero 4: ");

// Calcula a diferença
let diferenca = (n1 * n2) - (n3 * n4);

console.log("\nA diferença entre eles é: " + diferenca);

// Verifica se a diferença é positiva ou negativa e exibe uma mensagem correspondente
if (diferenca > 0) {
  console.log("A diferença é positiva.");
} else if (diferenca < 0) {
  console.log("A diferença é negativa.");
} else {
  console.log("A diferença é igual a zero.");
}