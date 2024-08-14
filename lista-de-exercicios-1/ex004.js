// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

var prompt = require("prompt-sync")();
console.log("Digite o número da opção: ");
let choice = +prompt(
  "1 - Data de Ontem | 2 - Data de Hoje | 3 Data de Amanhã: "
);

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

switch (choice) {
  case 1:
    console.log("Ontem:", yesterday.toLocaleDateString());
    break;
  case 2:
    console.log("Hoje:", today.toLocaleDateString());
    break;
  case 3:
    console.log("Amanhã:", tomorrow.toLocaleDateString());
    break;
  default:
    console.log("Opção inválida.");
}
