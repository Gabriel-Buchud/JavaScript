console.log("\nExercício 16 - Pesquisa da Empresa ");

const readline = require('readline-sync');

let pessoasBack = 0;
let mulheresFront = 0;
let homensMobileAcima40 = 0;
let naoBinariosFullStackMenos30 = 0;
let totalPessoas = 0;
let somaIdades = 0;

while (true) {
  // Entrada de dados
  let idade = readline.questionInt('\nIdade: ');
  let genero = readline.questionInt(`Identidade de Gênero:
1  Mulher Cis
2  Homem Cis
3  Nao Binario
4  Mulher Trans
5  Homem Trans
6  Outros\n`);
  let desenvolvedor = readline.questionInt(`Pessoa Desenvolvedora:
1  Backend
2  Frontend
3  Mobile
4  FullStack\n`);


  switch (desenvolvedor) {
    case 1:
      pessoasBack++;
      break;
    case 2:
      if (genero === 1 || genero === 4) {
        mulheresFront++;
      }
      break;
    case 3:
      if ((genero === 2 || genero === 5) && idade > 40) {
        homensMobileAcima40++;
      }
      break;
    case 4:
      if (genero === 3 && idade < 30) {
        naoBinariosFullStackMenos30++;
      }
      break;
    default:
      break;
  }

  totalPessoas++;
  somaIdades += idade;

  let continuar = readline.question('Deseja continuar (S/N): ');
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}


let mediaIdade = somaIdades / totalPessoas;


console.log(`\nTotal de pessoas desenvolvedoras Backend: ${pessoasBack}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresFront}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensMobileAcima40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${naoBinariosFullStackMenos30}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`A media de idade das pessoas que responderam à pesquisa: ${mediaIdade.toFixed(2)}`);