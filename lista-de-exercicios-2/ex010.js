// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

const vendas = [
	{ produto: "Mouse Space X", quantidade: 7, valor: 235.9 },
	{ produto: "Teclado Redragon APS", quantidade: 4, valor: 299.9 },
	{ produto: "Processador Ryzen 5 7445X", quantidade: 10, valor: 1499.9 },
	{ produto: "Monitor Acer 27' - 144HZ", quantidade: 4, valor: 899.9 },
	{ produto: "iPhone 15 - 256GB", quantidade: 3, valor: 4539.7 },
];

// biome-ignore lint/complexity/noForEach: <explanation>
vendas.forEach((venda) => {
	console.log(
		`${venda.produto} vendeu ${venda.quantidade} unidades, faturando o total de R$ ${(venda.quantidade * venda.valor).toFixed(2).replace(".", ",")}`,
	);
});
