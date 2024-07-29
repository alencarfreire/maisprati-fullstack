// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch dentro do bloco if/else para imprimir uma mensagem específica para cada faixa etária.
var prompt = require('prompt-sync')();

const idade = +prompt('Qual a sua idade? ');

const faixaEtaria = {
  crianca: idade >= 0 && idade <= 12,
  adolescente: idade >= 13 && idade <= 17,
  adulto: idade >= 18 && idade <= 59,
  idoso: idade >= 60,
};

if (faixaEtaria.crianca) {
  console.log('Você é uma criança.');
  switch (idade) {
    case 6:
      console.log('Famoso meia dúzia de idade.');
      break;
    case 12:
      console.log('Famoso uma dúzia de idade.');
      break;
  }
} else if (faixaEtaria.adolescente) {
  console.log('Você é um(a) adolescente.');
  switch (idade) {
    case 14:
      console.log('Que dia é o aniversário de 15 anos? Me convida!!!');
      break;
    case 15:
      console.log('Não me convidou para o seu aniversário de 15 anos :(');
      break;
  }
} else if (faixaEtaria.adulto) {
  console.log('Você é um(a) adulto(a).');
  switch (idade) {
    case 18:
      console.log('Com grandes poderes, vem grandes responsabilidades.');
      break;
    case 50:
      console.log('Meia centena, parabéns, 50 anos não é para poucos.');
      break;
  }
} else if (faixaEtaria.idoso) {
  console.log('Você é um(a) idoso(a).');
  switch (idade) {
    case 60:
      console.log('Bem-vindo(a) a melhor idade');
      break;
    case 100:
      console.log('100 anos??? Me ensina a viver até os 100 também!!');
      break;
  }
}
