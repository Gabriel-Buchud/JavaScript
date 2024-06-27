console.log("\nExercício 11 - Calculadora Simples ");

const readlineSync = require('readline-sync');

console.log("\nCodigo   Operaçao");
console.log("1        Soma");
console.log("2        Subtraçao");
console.log("3        Multiplicaçao");
console.log("4        Divisao");

let num1 = parseFloat(readlineSync.question("Digite o primei numero: "));
let num2 = parseFloat(readlineSync.question("Digite o segundo numero: "));
let operacao = parseInt(readlineSync.question("Operacao: "));

let resultado;

switch (operacao) {
  case 1:
    resultado = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + resultado.toFixed(1));
    break;
  case 2:
    resultado = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + resultado.toFixed(1));
    break;
  case 3:
    resultado = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + resultado.toFixed(1));
    break;
  case 4:
    if (num2 !== 0) {
      resultado = num1 / num2;
      console.log(num1 + " / " + num2 + " = " + resultado.toFixed(1));
    } else {
      console.log("Divisao por zero nao é permitida!");
    }
    break;
  default:
    console.log("Operaçao Invalida!");
}