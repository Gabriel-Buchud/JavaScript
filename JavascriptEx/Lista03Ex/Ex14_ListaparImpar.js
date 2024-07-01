console.log("\nExercício 14 - Laço For Ex 02 Par/Impar ");

const leia = require('readline-sync');

let par = 0;
let impar = 0;

//contador inicia em 1, variavel recebe +1, até chegar no limite de 10.
// inicio > final > condição.
for (let contador = 1; contador <= 10; contador++) {
  let numero = leia.questionInt(`\nDigite o ${contador} numero: `);

  //tratamento dos dados
  if (numero % 2 === 0) {
    par++;
  } else {
    impar++;
  }
}

console.log(`\nTotal de numeros pares: ${par}`);
console.log(`Total de numeros impares: ${impar}`);