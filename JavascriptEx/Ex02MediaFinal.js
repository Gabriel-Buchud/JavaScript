console.log("\nExercício 02 - Média Final")

const leia = require('readline-sync');

// Lê a nota 1
let nota1 = leia.questionFloat("\nNota 1: ");
if (nota1 < 0 || nota1 > 10) {
  console.log("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
}

// Lê a nota 2
let nota2 = leia.questionFloat("Nota 2: ");
if (nota2 < 0 || nota2 > 10) {
  console.log("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
}

// Lê a nota 3
let nota3 = leia.questionFloat("Nota 3: ");
if (nota3 < 0 || nota3 > 10) {
  console.log("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
}

// Lê a nota 4
let nota4 = leia.questionFloat("Nota 4: ");
if (nota4 < 0 || nota4 > 10) {
  console.log("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
}

// Calcula a média final
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// Exibe a média final
console.log(`\nMédia final: ` + media);

// Verifica se o aluno foi aprovado ou reprovado
if (media >= 6) {
  console.log("Aluno Aprovado!");
} else {
  console.log("Aluno reprovado.");
}