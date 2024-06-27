const leia = require('readline-sync')

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ")
idade = leia.questionInt("\nDigite sua idade: ")

if (idade >= 0 && idade <= 10) {
  console.log("\nSeu plano de saude custara R$ 100,00 por mes.")
} else if (idade >= 11 && idade <= 29) {
  console.log("\nSeu plano custara 500,00 por mes")
}
else {
  console.log("\nSeu plano de saude custara R$ 1000,00 por mes")
}

//nesse caso ao invés de concatenar com (+ nome)
//podemos usar crase para chamar a variável dentro da frase com ( ${variavel} ).
if (nome === 'Geandro') {
  console.log(`\n Muito obrigado ${nome}!`)
}