console.log("\nExercício 08 - Laco If Animais ");

const readlineSync = require('readline-sync');

console.log("\nEscolha a primeira caracteristica:");
console.log("1. Vertebrado");
console.log("2. Invertebrado");
let vertebra = readlineSync.question("Digite a opcao escolhida: ");

console.log("\nEscolha a segunda caracteristica:");
if (vertebra === "1") {
    console.log("1. Mamifero");
    console.log("2. Ave");
} else if (vertebra === "2") {
    console.log("1. Inseto");
    console.log("2. Anelideo");
}
let alimentacao = readlineSync.question("Digite a opcao escolhida: ");

console.log("\nEscolha a terceira caracteristica:");
if (vertebra === "1" && alimentacao === "1") {
    console.log("1. Onivoro");
    console.log("2. Herbivoro");
} else if (vertebra === "1" && alimentacao === "2") {
    console.log("1. Carnivoro");
    console.log("2. Onivoro");
} else if (vertebra === "2" && alimentacao === "1") {
    console.log("1. Herbivoro");
    console.log("2. Hematofago");
} else if (vertebra === "2" && alimentacao === "2") {
    console.log("1. Hematofago");
    console.log("2. Onivoro");
}
let caracteristica3 = readlineSync.question("Digite a opcao escolhida: ");

var animal;

if (vertebra === "1" && alimentacao === "1" && caracteristica3 === "1") {
    animal = "Homem";
} else if (vertebra === "1" && alimentacao === "1" && caracteristica3 === "2") {
    animal = "Vaca";
} else if (vertebra === "1" && alimentacao === "2" && caracteristica3 === "1") {
    animal = "Aguia";
} else if (vertebra === "1" && alimentacao === "2" && caracteristica3 === "2") {
    animal = "Pombo";
} else if (vertebra === "2" && alimentacao === "1" && caracteristica3 === "1") {
    animal = "Lagarta";
} else if (vertebra === "2" && alimentacao === "1" && caracteristica3 === "2") {
    animal = "Pulga";
} else if (vertebra === "2" && alimentacao === "2" && caracteristica3 === "1") {
    animal = "Sanguessuga";
} else if (vertebra === "2" && alimentacao === "2" && caracteristica3 === "2") {
    animal = "Minhoca";
} else {
    animal = "Animal desconhecido";
}

// Saida de dados
console.log("O animal escolhido e: " + animal);
