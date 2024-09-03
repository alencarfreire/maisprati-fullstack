// Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

const funcionarios = [
	{ nome: "João", cargo: "Escrevente", salario: 4000 },
	{ nome: "Eliana", cargo: "Professora", salario: 4500 },
	{ nome: "Elielson", cargo: "Entregador", salario: 3200 },
];

for (const funcionario of funcionarios) {
	if (funcionario.salario > 3500) {
		console.log(
			`${funcionario.nome} trabalha como ${funcionario.cargo} e recebe o salário de R$ ${funcionario.salario},00.`,
		);
	}
}
