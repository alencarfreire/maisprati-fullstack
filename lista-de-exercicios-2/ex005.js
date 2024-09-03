// Calculando Valores em Arrays de Objetos
// Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

const alunos = [
	{ nome: "José", nota1: 7, nota2: 8.5 },
	{ nome: "Luis", nota1: 9.5, nota2: 6 },
	{ nome: "Andressa", nota1: 9, nota2: 7 },
];

for (const aluno of alunos) {
	const media = (aluno.nota1 + aluno.nota2) / 2;
	console.log(`A média de ${aluno.nome} foi ${media}.`);
}
