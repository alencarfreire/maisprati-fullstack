// verifique se um número é par ou impar
var prompt = require('prompt-sync')();

const numero = +prompt('Digite um número: ');

if (numero % 2 == 0) {
  console.log(`O numero ${numero} é par.`);
} else {
  console.log(`O número ${numero} é impar.`);
}
