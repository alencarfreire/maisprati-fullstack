// 8 - Verifique a estação do ano

// Escreva um programa que leia um número de 1 a 4 e use uma
// estrutura switch para imprimir a estação do ano correspondente. (1 =
// Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)

var prompt = require('prompt-sync')();

const numeroEstacao = +prompt('Digite um número de 1 a 4: ');

switch (numeroEstacao) {
  case 1:
    console.log('Primavera');
    break;
  case 2:
    console.log('Verão');
    break;
  case 3:
    console.log('Outono');
    break;
  case 4:
    console.log('Inverno');
    break;
}