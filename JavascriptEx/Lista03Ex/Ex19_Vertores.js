const leia = require('readline-sync');

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Vetor: ");
console.table(vetor);

const numero = leia.questionInt("Digite o numero que voce deseja encontrar: ");

let encontrado;
let posicao;

// Busca pelo vetor para encontrar a posição do número
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === numero) {
    encontrado = true;
    posicao = i;
    break;
  }
}

if (encontrado) {
  console.log(`O numero ${numero} esta localizado na posicao: ${posicao}`);
} else {
  console.log(`O numero ${numero} nao foi encontrado!`);
}