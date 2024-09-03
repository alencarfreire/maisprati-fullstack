// Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

const clientes = [
	{ nome: "Lúcio", idade: 47, cidade: "Jacobina" },
	{ nome: "Tamara", idade: 27, cidade: "Porto Seguro" },
	{ nome: "Vera Lúcia", idade: 58, cidade: "Salvador" },
	{ nome: "Marcos", idade: 25, cidade: "Camaçari" },
	{ nome: "Antônio", idade: 32, cidade: "Eunápolis" },
	{ nome: "Eptácio", idade: 28, cidade: "Ilhéus" },
];

let clientesMaisTrinta = 0;

// biome-ignore lint/complexity/noForEach: <explanation>
clientes.forEach((cliente) => {
	if (cliente.idade > 30) {
		clientesMaisTrinta += 1;
	}
});

console.log(`No total são ${clientesMaisTrinta} clientes acima de 30 anos.`);
