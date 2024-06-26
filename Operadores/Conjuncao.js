let maior18 = true;
let menor18 = false;
let comIngresso = true;
let semIngresso = false;

//Opreadores Lógicos - conjunção
console.log("Operadores Lógicos - conjunção")

//Nesse exemplo ambas devem ser verdadeiras, caso o contrário retornará falso.
resposta = maior18 && comIngresso;
console.log("\nVerdadeiro e Verdadeiro: " + resposta);

resposta = menor18 && semIngresso;
console.log("\nFalso e Falso: " + resposta);

