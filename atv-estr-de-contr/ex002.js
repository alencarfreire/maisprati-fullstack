var prompt = require('prompt-sync')();

const ano = +prompt('Digite um ano: ')

if (((ano % 4 == 0) && !(ano % 100 == 0)) || (ano % 400 == 0)) {
  console.log(`O ano ${ano} é bisexto!`)
} else {
  console.log(`O ano ${ano} não é bisexto`)
}