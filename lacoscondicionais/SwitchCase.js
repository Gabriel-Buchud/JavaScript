const leia = require('readline-sync')

let nome;
let codigo;

nome = leia.question("\nDigite seu nome: ")

console.log("\n Faixas Etárias: ")
console.log("\n 1 -- De 0 a 10 anos ");
console.log(" 2 -- De 11 a 29 anos ");
console.log(" 3 -- De 30 a 45 anos ");
console.log(" 4 -- De 46 a 59 anos");
console.log(" 5 -- De 60 a 65 anos ");
console.log(" 6 -- Acima de 65 anos ");

codigo = leia.questionInt("\nDigite o codigo da sua faixa etaria: ")

switch (codigo) {
  case 1:
    console.log("\nSeu plano de saude custara R$ 100,00 por mes.")
    break;
  case 2:
    console.log("\nSeu plano de saude custara R$ 200,00 por mes.")
    break;
  case 3:
    console.log("\nSeu plano de saude custara R$ 300,00 por mes.")
    break;
  case 4:
    console.log("\nSeu plano de saude custara R$ 400,00 por mes.")
    break;
  case 5:
    console.log("\nSeu plano de saude custara R$ 500,00 por mes.")
    break;
  case 6:
    console.log("\nSeu plano de saude custara R$ 1000,00 por mes.")
    break;
  default:
    console.log("\nDigite um código válido!")
}