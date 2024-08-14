// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

var prompt = require("prompt-sync")();

let grade = +prompt("Qual a nota do aluno? ");

const gradeClassification = {
  failed: grade <= 3.99,
  recovery: grade >= 4 && grade <= 5.99,
  approved: grade >= 6 && grade <= 10,
};

if (gradeClassification.failed) {
  console.log(`Aluno reprovado com nota: ${grade}`);
} else if (gradeClassification.recovery) {
  console.log(`Aluno apto para recuperação.`);
} else if (gradeClassification.approved) {
  console.log(`Aluno aprovado com nota: ${grade}`);
} else {
  console.log("Digite uma nota válida.");
}
