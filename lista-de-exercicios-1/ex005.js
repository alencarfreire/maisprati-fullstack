// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

var prompt = require("prompt-sync")();

const peso = +prompt("Qual o seu peso? (kg): ");
const altura = +prompt("Qual a sua altura? (metro): ");
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
  console.log("Você está com o peso normal.");
} else if (categoriaDePesos.sobrepeso) {
  console.log("Você está com sobrepeso, procure um médico.");
} else if (categoriaDePesos.obesidade.grauI) {
  console.log("Você está com obesidade grau 1, procure um médico.");
  switch (imc) {
    case imc >= 30 && imc <= 31:
      console.log(
        "Você acabou de entrar no grau 1 de obesidade, está fácil sair dessa situação."
      );
      break;
    case imc >= 32 && imc <= 34:
      console.log(
        "Você está no limite do grau 2 de obesidade, recomendo muita atenção com a sua saúde.."
      );
      break;
  }
} else if (categoriaDePesos.obesidade.grauII) {
  console.log("Você está com obesidade grau 2, procure um médico.");
} else if (categoriaDePesos.obesidade.grauIII) {
  console.log(
    "Você está com obesidade grau 3, procure um médico, urgentemente."
  );
} else {
  console.log("Você está abaixo do peso.");
}
