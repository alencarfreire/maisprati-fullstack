// 5 - Verifique a categoria de um nadador

// Escreva um programa que leia a idade de um nadador e use uma estrutura
// if/else para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais

var prompt = require('prompt-sync')();

const idade = +prompt('Qual a idade do nadador? ');

const nadador = {
  infantilA: {
    idade: idade >= 5 && idade <= 7,
    categoria: 'Categoria: Infantil A',
  },
  infantilB: {
    idade: idade >= 8 && idade <= 10,
    categoria: 'Categoria: Infantil B',
  },
  juvenilA: {
    idade: idade >= 11 && idade <= 13,
    categoria: 'Categoria: Juvenil A',
  },
  juvenilB: {
    idade: idade >= 14 && idade <= 17,
    categoria: 'Categoria: Juvenil B',
  },
  adulto: {
    idade: idade >= 18,
    categoria: 'Categoria: Adulto',
  },
};

if (nadador.infantilA.idade) {
  console.log(nadador.infantilA.categoria);
} else if (nadador.infantilB.idade) {
  console.log(nadador.infantilB.categoria);
} else if (nadador.juvenilA.idade) {
  console.log(nadador.juvenilA.categoria);
} else if (nadador.juvenilB.idade) {
  console.log(nadador.juvenilB.categoria);
} else if (nadador.adulto.idade) {
  console.log(nadador.adulto.categoria);
} else {
  console.log('Não tem idade para competir');
}
