// Modificando Objetos em um Array
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

const produtos = [
	{ nome: "Algodão", preco: 10, desconto: 0 },
	{ nome: "Leite", preco: 4.99, desconto: 0 },
	{ nome: "Bacon", preco: 7.89, desconto: 0 },
	{ nome: "Arroz", preco: 5.55, desconto: 0 },
];

// biome-ignore lint/complexity/noForEach: <explanation>
produtos.forEach((produto) => {
	produto.desconto = 0.9; // 10% de desconto
	produto.preco = produto.preco * produto.desconto;
	console.log(
		`${produto.nome} - Valor com desconto: R$ ${produto.preco.toFixed(2).replace(".", ",")}`,
	);
});
