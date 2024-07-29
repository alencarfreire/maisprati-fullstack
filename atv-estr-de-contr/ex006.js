// 6 - Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma
// estrutura switch para imprimir o dia da semana correspondente. (1 =
// Domingo, 2 = Segunda-feira, etc.)
var prompt = require('prompt-sync')();

const diaDaSemana = +prompt('Digite um número de 1 a 7: ');

switch (diaDaSemana) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda');
    break;
  case 3:
    console.log('Terça');
    break;
  case 4:
    console.log('Quarta');
    break;
  case 5:
    console.log('Quinta');
    break;
  case 6:
    console.log('Sexta');
    break;
  case 7:
    console.log('Sabado');
    break;
}
