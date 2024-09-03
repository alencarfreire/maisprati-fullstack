// Iterando Sobre Arrays de Objetos
// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

const pessoas = [
	{ nome: "Vinicius", idade: 29, cidade: "Porto Seguro" },
	{ nome: "Veridiane", idade: 31, cidade: "Teixeira de Freitas" },
	{ nome: "Liz", idade: 1.6, cidade: "Eunápolis" },
];

for (const pessoa of pessoas) {
	console.log(
		`${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}.`,
	);
}
