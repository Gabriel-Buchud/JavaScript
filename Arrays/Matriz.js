let leia = require("readline-sync")

let matrizInteiros = Array(3);

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
  matrizInteiros[indiceLinha] = Array(3)

}

for (let cindiceLinha = 0; contador < matrizInteiros.length; contador ++){
  matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ")
}

console.table(matrizInteiros)