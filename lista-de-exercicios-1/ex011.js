// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

var prompt = require("prompt-sync")();

let soma = 0;

console.log(
  "Este programa soma 5 números que você fornercer para mim, irei te pedir um número por vez..."
);

for (let i = 0; i < 5; i++) {
  let num = +prompt("Digite um número: ");
  soma += num;
}

console.log(`A soma dos 5 números que você forneceu é: ${soma}`);
