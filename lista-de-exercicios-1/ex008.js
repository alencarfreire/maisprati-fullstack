// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

var prompt = require("prompt-sync")();

let valor1 = +prompt("Digite um número: ");
let valor2 = +prompt("Digite outro número: ");

if (valor1 <= valor2) {
  console.log(valor1 + ", " + valor2);
} else {
  console.log(valor2 + ", " + valor1);
}
