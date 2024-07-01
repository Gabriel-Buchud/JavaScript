console.log("\nExercício 15 - Lista de Idade ");

const readline = require('readline-sync');

let menorIdade = 0;
let maiorIdade = 0;

while (true) {
    let idade = readline.questionInt('\nDigite a idade (ou digite um numero negativo para sair): ');

    if (idade < 0) {
        break;
    }

    if (idade > 0 && idade <= 120) {
        if (idade < 21) {
            menorIdade++;
        } else if (idade > 50) {
            maiorIdade++;
        }
    } else if (idade > 120) {
        console.log("Idade inválida. Por favor, digite uma idade válida até 120 anos.");
    }

}

console.log(`Total de pessoas menores de 21 anos: ${menorIdade}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiorIdade}`);
