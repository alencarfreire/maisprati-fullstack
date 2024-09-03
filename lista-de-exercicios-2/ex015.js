// Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

const transacoes = [
	{ entrada: 50.5, saida: 45 },
	{ entrada: 0, saida: 0 },
	{ entrada: 0, saida: 0 },
	{ entrada: 7.89, saida: 10.43 },
	{ entrada: 150, saida: 0 },
	{ entrada: 0, saida: 150 },
	{ entrada: 0, saida: 0 },
	{ entrada: 1565, saida: 182.97 },
];

saldoFinal = 0;

// biome-ignore lint/complexity/noForEach: <explanation>
transacoes.forEach((transacao) => {
	saldoFinal += transacao.entrada - transacao.saida;
});

console.log(`O seu saldo final é R$${saldoFinal.toFixed(2).replace(".", ",")}`);
