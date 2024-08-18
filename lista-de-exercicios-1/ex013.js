// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

var prompt = require('prompt-sync')();

let numerosDecimais = [];

while (!numerosDecimais.includes(0)) {
  numerosDecimais.push(+prompt('Digite um número: '));
}

let total = 0;

for (let i = 0; i < numerosDecimais.length; i++) {
  total += numerosDecimais[i];
}
console.log(total);

let media = total / (numerosDecimais.length - 1);

console.log(media);
