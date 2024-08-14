// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//   adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//   controle if-else.

var prompt = require("prompt-sync")();

let age = +prompt("Digite a sua idade: ");

const ageClassification = {
  child: age >= 2 && age <= 11,
  adolescent: age >= 12 && age <= 17,
  adult: age >= 18 && age <= 64,
  elderly: age >= 65,
};

if (ageClassification.child) {
  console.log("Você é uma criança.");
} else if (ageClassification.adolescent) {
  console.log("Você é um adolescente.");
} else if (ageClassification.adult) {
  console.log("Você é um adulto.");
} else if (ageClassification.elderly) {
  console.log("Você é um idoso.");
} else {
  console.log("Você é um bebê, alguém digitou pra você?");
}
