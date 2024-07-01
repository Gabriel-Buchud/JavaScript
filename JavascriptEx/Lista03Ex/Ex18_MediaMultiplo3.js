console.log("\nExercício - Média dos múltiplos de 3");

const leia = require('readline-sync');

let soma = 0;
let contador = 0;
let numero;

do {
    numero = leia.questionInt("Digite um numero: ");

    if (numero !== 0 && numero % 3 === 0) {
        soma += numero;
        contador++;
    }else if(numero == 0){
      break;
    }
} while (numero !== 0);

let media = contador > 0 ? (soma / contador).toFixed(2) : 'Nenhum numero multiplo de 3 digitado';

console.log(`A media de todos os numeros multiplos de 3 é: ${media}`);
