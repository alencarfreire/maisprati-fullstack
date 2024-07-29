var prompt = require('prompt-sync')();

const numero = +prompt('Digite um número: ')

if (numero < 0) {
  console.log(`O ${numero} é negativo`)
} else if (numero > 0) {
  console.log(`O ${numero} é positivo`)
} else {
  console.log(`Você digitou ${numero}`)
}
