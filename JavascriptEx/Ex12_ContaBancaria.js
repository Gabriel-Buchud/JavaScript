console.log("\nExercício 11 - Conta do Banco ");

const readlineSync = require('readline-sync');

let saldo = 1000.00;

console.log("\nCodigo da Operacao");
console.log("\n1                    Saldo");
console.log("2                    Saque");
console.log("3                    Deposito");

let operacao = parseInt(readlineSync.question("Operacao: "));

let valor;
let valorUtilizado;

switch (operacao) {
  case 1:
    console.log("\nOperacao - Saldo");
    console.log("Saldo: R$ " + saldo.toFixed(2));
    console.log("Valor Restante na Conta: R$ " + saldo.toFixed(2));
    break;

  case 2:
    valor = parseFloat(readlineSync.question("Valor a ser sacado: R$ "));
    if (valor <= saldo) {
      saldo -= valor;
      valorUtilizado = valor;
      console.log("\nOperacao - Saque");
      console.log("Valor Utilizado: R$ " + valorUtilizado.toFixed(2));
      console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    } else {
      console.log("\nOperacao - Saque");
      console.log("Saldo Insuficiente!");
      console.log("Valor Restante na Conta: R$ " + saldo.toFixed(2));
    }
    break;

  case 3:
    valor = parseFloat(readlineSync.question("Valor a ser depositado: R$ "));
    saldo += valor;
    console.log("\nOperacao - Deposito");
    console.log("Valor Utilizado: R$ " + saldo.toFixed(2));
    console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    break;
  default:

    console.log("\nOperacao Invalida!");
}