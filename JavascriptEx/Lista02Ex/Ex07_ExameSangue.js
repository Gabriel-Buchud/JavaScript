console.log("\nExercício 07 - Doação de sangue");

const leia = require('readline-sync');

let nome = leia.question("\nDigite o Nome do doador: ");

// While cria loops que executam o bloco pelo menos uma vez antes de continuar o código.
// O código prosseguia para outras etapas sem esse comando.
let idade
while (true) {
  idade = leia.questionInt("Digite a Idade do doador: ");
  if (idade >= 18 && idade <= 69) {
    break;
  } else {
    console.log("Idade fora do permitido (18 a 69 anos). Por favor, digite uma idade valida.");
  }
}

// Saber se é a primeira doação de sangue.
// (||) operador lógico "OU".Avalia duas expressões booleanas e retorna true se pelo menos uma das expressões for verdadeira.
// sem ele, apenas a opção 1 era marcada como verdadeira, erro nos testes, permitia sair do loop caso o numero fosse 3 ou mais.
let primeiraDoacao
while (true) {
  primeiraDoacao = leia.question("Primeira doacao de sangue? \n1 - sim \n2 - nao \nEscolha uma opcao acima: ");
  if (primeiraDoacao === "1" || primeiraDoacao === "2") {// Converte o número 1 e 2 para booleano.
    break;// aprendi a lição.
  } else {
    console.log("Opção inválida. Digite apenas 1 para sim ou 2 para não.");
  }
}

// Verifica se a pessoa pode ou não doar sangue (!) serve para inverter o resultado booleano.
// Tem 60 anos ou mais e é a sua primeira doação,(idade >= 60 && primeiraDoacao) será true, e a negação ! a tornará false.
// Forma mais simples de entender é que ! força a condição verdadeira a ser falsa.
// verdadeiro -> verdadeiro -> Falso.
if (idade >= 18 && idade <= 69 && !(idade >= 60 && primeiraDoacao)) {
  console.log(`\n${nome} está apto para doar sangue!`);
} else {
  console.log(`\n${nome} não está apto para doar sangue!`);
}


/* Tentei fazer assim da primeira vez.
if (idade >= 18 && idade <= 69) {
  if (idade >= 60 && primeiraDoacao) {
    console.log(`\n${nome} não está apto para doar sangue!`);
  } else {
    console.log(`\n${nome} está apto para doar sangue!`);
  }
}
*/
