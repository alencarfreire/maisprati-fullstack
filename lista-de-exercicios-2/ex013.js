// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

const carrinho = {
	itens: [
		{ nome: "Boneco do Naruto", quantidade: 1, precoUnitario: 59.8 },
		{ nome: "Tênis Preto 44", quantidade: 1, precoUnitario: 226.6 },
		{ nome: "Camisa", quantidade: 4, precoUnitario: 78.6 },
		{ nome: "Bermuda", quantidade: 3, precoUnitario: 119.9 },
	],
};

let valorTotal = 0;

// biome-ignore lint/complexity/noForEach: <explanation>
carrinho.itens.forEach((item) => {
	valorTotal += item.quantidade * item.precoUnitario;
});

console.log(
	`Valor total do carrinho: R$ ${valorTotal.toFixed(2).replace(".", ",")}`,
);
