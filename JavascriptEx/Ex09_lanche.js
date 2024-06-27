console.log("\nExercício 09 - Lanche ");

const readlineSync = require('readline-sync');

console.log("\nCodigo do Produto   Produto            Preço Unitario");
console.log("1                   Cachorro Quente    R$ 10.00");
console.log("2                   X-Salada           R$ 15.00");
console.log("3                   X-Bacon            R$ 18.00");
console.log("4                   Bauru              R$ 12.00");
console.log("5                   Refrigerante       R$ 8.00");
console.log("6                   Suco de laranja    R$ 13.00");

let codProduto = parseInt(readlineSync.question("Digite o codigo do produto (1 a 6): "));
let quantidade = parseInt(readlineSync.question("Digite a quantidade comprada: "));

let produto;
let precoUnitario;
let valorTotal;

switch (codProduto) {
  case 1:
    produto = "Cachorro Quente";
    precoUnitario = 10.00;
    break;
  case 2:
    produto = "X-Salada";
    precoUnitario = 15.00;
    break;
  case 3:
    produto = "X-Bacon";
    precoUnitario = 18.00;
    break;
  case 4:
    produto = "Bauru";
    precoUnitario = 12.00;
    break;
  case 5:
    produto = "Refrigerante";
    precoUnitario = 8.00;
    break;
  case 6:
    produto = "Suco de laranja";
    precoUnitario = 13.00;
    break;
  default:
    console.log("Codigo de produto invalido.");
    return;
}

valorTotal = quantidade * precoUnitario;

console.log("\nProduto: " + produto);
console.log("Quantidade: " + quantidade);
console.log("Preço unitário: R$ " + precoUnitario.toFixed(2));
console.log("Valor total: R$ " + valorTotal.toFixed(2));