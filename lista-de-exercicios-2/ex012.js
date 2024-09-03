// Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
	{ produto: "KitKat", quantidade: 5, minimo: 10 },
	{ produto: "Oreo", quantidade: 8, minimo: 10 },
	{ produto: "Pop", quantidade: 2, minimo: 10 },
	{ produto: "Kiss", quantidade: 6, minimo: 10 },
	{ produto: "Toblerone", quantidade: 5, minimo: 10 },
	{ produto: "Neugebauer", quantidade: 9, minimo: 10 },
];

// biome-ignore lint/complexity/noForEach: <explanation>
estoque.forEach((produto) => {
	if (produto.quantidade < produto.minimo) {
		produto.quantidade = produto.quantidade * 2;
	}
	console.log(
		`Estoque Atualizado - ${produto.produto} - Quantidade: ${produto.quantidade}`,
	);
});
