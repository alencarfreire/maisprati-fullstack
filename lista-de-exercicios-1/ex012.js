// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//   10) utilizando um loop for.

var prompt = require("prompt-sync")();

let num = +prompt('Você quer a tabuada de qual número? ')

for(let i = 1; i <= 10; i++) {
  console.log(`${i} * ${num} = ${i * num}`)
}