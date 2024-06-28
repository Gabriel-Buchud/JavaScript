console.log("\nExercício 03 - Salário Líquido")

const leia = require('readline-sync');

// Lê o Salário Bruto
let salarioBruto = leia.questionFloat("\nSalario Bruto: ");

// Lê o Adicional Noturno
let adcNoturno = leia.questionFloat("Adicional Noturno: ");

// Lê as Horas Extras
let hrsExtras = leia.questionFloat("Horas Extras: ");

// Lê os Descontos
let descontos = leia.questionFloat("Descontos: ");

// Calcula o Salário Líquido
let salarioLiquido = salarioBruto + adcNoturno + (hrsExtras * 5) - descontos;
console.log("\nSalário Líquido: " + salarioLiquido);
