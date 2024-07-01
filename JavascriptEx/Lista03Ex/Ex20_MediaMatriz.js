console.log("\nExercício - Médias dos Participantes");

const leia = require('readline-sync');

let matrizNotas = [];
for (let i = 0; i < 10; i++) {
    matrizNotas[i] = [];
}

console.log("Digite as notas dos alunos para cada bimestre:");
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 4; j++) {
        let nota;
        do {
            nota = leia.questionFloat(`Digite a nota do ${j + 1} bimestre para o ${i + 1} aluno: `);
            if (nota < 0 || nota > 10) {
                console.log("\nValor invalido. Digite uma nota entre 0 e 10.");
            }
        } while (nota < 0 || nota > 10);
        matrizNotas[i][j] = nota;
    }
}

let vetorMedias = [];

for (let i = 0; i < 10; i++) {
    let soma = 0;
    for (let j = 0; j < 4; j++) {
        soma += matrizNotas[i][j];
    }
    let media = soma / 4;
    vetorMedias.push(media.toFixed(1));
}

console.log("\nMédias dos alunos:");
for (let i = 0; i < 10; i++) {
    console.log(`Alunos ${i + 1}: ${vetorMedias[i]}`);
}