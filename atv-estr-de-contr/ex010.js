// 10 - Calcule o IMC e determine a categoria

// Escreva um programa que leia o peso (kg) e a altura (m) de uma
// pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).

var prompt = require('prompt-sync')();

const peso = +prompt('Qual o seu peso? (kg): ');
const altura = +prompt('Qual a sua altura? (metro): ');
const imc = peso / (altura * altura);
console.log(imc);

const categoriaDePesos = {
  abaixo: imc < 18.5,
  normal: imc >= 18.5 && imc <= 24.9,
  sobrepeso: imc >= 25 && imc <= 29.9,
  obesidade: {
    grauI: imc >= 30 && imc <= 34.9,
    grauII: imc >= 35 && imc <= 39.9,
    grauIII: imc >= 40,
  },
};

if (categoriaDePesos.normal) {
  console.log('Você está com o peso normal.');
} else if (categoriaDePesos.sobrepeso) {
  console.log('Você está com sobrepeso, procure um médico.');
} else if (categoriaDePesos.obesidade.grauI) {
  console.log('Você está com obesidade grau 1, procure um médico.');
  switch (imc) {
    case imc >= 30 && imc <= 31:
      console.log(
        'Você acabou de entrar no grau 1 de obesidade, está fácil sair dessa situação.',
      );
      break;
    case imc >= 32 && imc <= 34:
      console.log(
        'Você está no limite do grau 2 de obesidade, recomendo muita atenção com a sua saúde..',
      );
      break;
  }
} else if (categoriaDePesos.obesidade.grauII) {
  console.log('Você está com obesidade grau 2, procure um médico.');
} else if (categoriaDePesos.obesidade.grauIII) {
  console.log(
    'Você está com obesidade grau 3, procure um médico, urgentemente.',
  );
} else {
  console.log('Você está abaixo do peso.');
}
