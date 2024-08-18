// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let numero = 7;
let fatorial = 1;

for (let i = numero; i > 0; i--) {
  fatorial *= i;
}

console.log(fatorial);
