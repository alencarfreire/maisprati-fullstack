// 7 - Calcule o valor de uma expressão matemática simples

// Escreva um programa que leia dois números e um operador (+, -, *,
// /) e use uma estrutura switch para calcular o resultado da operação.
// Imprima o resultado.
var prompt = require('prompt-sync')();

console.log('Essa é uma calculadora de dois números.');

const num1 = +prompt('Insira o primeiro número: ');
const num2 = +prompt('Insira o segundo número: ');
console.log('Qual operação você deseja fazer?');
const operador = +prompt(
  '1 - Soma | 2 - Subtração | 3 - Multiplicação | 4 - Divisão | 5 - Todos: ',
);

switch (operador) {
  case 1:
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case 2:
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case 3:
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case 4:
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  case 5:
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
}
