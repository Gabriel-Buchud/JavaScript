console.log("\nExercício 10 - Reajuste Salario ");

const readlineSync = require('readline-sync');

console.log("\nCódigo do Cargo   Cargo            Percentual do Reajuste");
console.log("1                 Gerente          10%");
console.log("2                 Vendedor         7%");
console.log("3                 Supervisor       9%");
console.log("4                 Motorista        6%");
console.log("5                 Estoquista       5%");
console.log("6                 Técnico de TI    8%");

let nomeColab = readlineSync.question("Digite o nome do colaborador: ");
let codigoCargo = parseInt(readlineSync.question("Digite o codigo do cargo do colaborador (1 a 6): "));
let salario = parseFloat(readlineSync.question("Digite o salario do colaborador: R$ "));

let cargo;
let Reajuste;
let novoSalario;

switch (codigoCargo) {
  case 1:
    cargo = "Gerente";
    Reajuste = 0.10;
    break;
  case 2:
    cargo = "Vendedor";
    Reajuste = 0.07;
    break;
  case 3:
    cargo = "Supervisor";
    Reajuste = 0.09;
    break;
  case 4:
    cargo = "Motorista";
    Reajuste = 0.06;
    break;
  case 5:
    cargo = "Estoquista";
    Reajuste = 0.05;
    break;
  case 6:
    cargo = "Tecnico de TI";
    Reajuste = 0.08;
    break;
  default:
    console.log("Código de cargo inválido.");
    return;
}

novoSalario = salario + (Reajuste * salario);

console.log("\nNome do colaborador: " + nomeColab);
console.log("Cargo: " + cargo);
console.log("Salario: R$ " + salario.toFixed(2));
console.log("Novo Salario: R$ " + novoSalario.toFixed(2));

