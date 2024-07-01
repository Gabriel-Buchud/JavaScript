console.log("\nExercício 13 - Laço For Ex 01 da lista ");

const leia = require('readline-sync');

let numero1 = leia.questionInt("\nDigite o primeiro intervalo: ");

let numero2 = leia.questionInt("Digite o segundo intervalo: ");

if (numero1 >= numero2) {
  console.log("numero invalido!");
} else {
  console.log(`\nNo intervalo entre os numeros ${numero1} e ${numero2}: `);
  for (let numero = numero1; numero <= numero2; numero++) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      console.log(`${numero} é multipo de 3 e 5`);
    }
  }
}