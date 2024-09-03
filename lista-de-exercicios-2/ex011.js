// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

const pedidos = [
	{ cliente: "Luciano", produto: "Raquete", quantidade: 2 },
	{ cliente: "Ronaldo", produto: "Caixa de Lápis", quantidade: 12 },
	{ cliente: "Luciano", produto: "Bola de Basquete", quantidade: 7 },
	{ cliente: "Ronaldo", produto: "Caixa Organizadora", quantidade: 4 },
];

totalPorCliente = {};

// biome-ignore lint/complexity/noForEach: <explanation>
pedidos.forEach((pedido) => {
	if (totalPorCliente[pedido.cliente]) {
		totalPorCliente[pedido.cliente] += pedido.quantidade;
		console.log(
			`O cliente ${pedido.cliente} comprou ${totalPorCliente[pedido.cliente]}`,
		);
	} else {
		totalPorCliente[pedido.cliente] = pedido.quantidade;
	}
});
