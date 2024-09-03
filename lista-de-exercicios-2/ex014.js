// Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

const empresa = {
	departamentos: [
		{
			nome: "Contabilidade",
			listaDeFuncionarios: ["João", "Marcelo", "Luis"],
		},
		{
			nome: "Limpeza",
			listaDeFuncionarios: ["Mauro", "Joana", "Lucas"],
		},
		{
			nome: "Portaria",
			listaDeFuncionarios: ["Érika", "Laura", "Otavio"],
		},
	],
};

for (const departamento of empresa.departamentos) {
	for (const nome in departamento.listaDeFuncionarios) {
		console.log(
			`Funcinário(a) ${departamento.listaDeFuncionarios[nome]}: ${departamento.nome}.`,
		);
	}
}
