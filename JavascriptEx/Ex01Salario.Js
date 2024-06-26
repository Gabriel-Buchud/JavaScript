console.log("\nExercício 01 - Salario")

//Chama a biblioteca redline-sync para dentro da variável leia
const leia = require('readline-sync');

//Lê o salario e guarda o valor dentro da variável
let salario = leia.questionInt("\nDigite o seu salario: ")
console.log("O valor digitado é "+ salario);

//Lê o abono e guarda o valor dentro da variável
let abono = leia.questionInt("\nDigite o seu abono: ")
console.log("O valor digitado é "+ abono);

//Imprime a soma das duas variáveis
console.log("\nNovo salario (salário + Abono): " + (salario + abono))

//Verifica se o salario está acima ou abaixo do esperado
if (salario + abono < 1500) {
  console.log("O salário está abaixo do esperado.");
} else if (salario + abono >= 1500 && salario + abono <= 5000) {
  console.log("O salário está dentro do intervalo esperado.");
} else {
  console.log("O salário está acima do esperado.");
}