// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let fibonacci = [0, 1];

let antPenNum = 0;
let penNum = 1;

for (let i = 2; i < 10; i++) {
  let proxNum = antPenNum + penNum;

  fibonacci.push(proxNum);

  antPenNum = penNum;
  penNum = proxNum;
}

console.log(fibonacci);
