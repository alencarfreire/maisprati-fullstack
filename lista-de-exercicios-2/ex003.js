// Filtrando Propriedades de Objetos
// Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

function filtrarPropriedadesMaiores(objeto, valorlimite) {
	const objetoMaiorFiltrado = {};

	for (const chave in objeto) {
		if (objeto[chave] > valorlimite) {
			objetoMaiorFiltrado[chave] = objeto[chave];
		}
	}

	return objetoMaiorFiltrado;
}

const produto = {
	nome: "Produto Oculto",
	largura: 10,
	altura: 20,
	peso: 15,
	valor: 500,
};

const resultado = filtrarPropriedadesMaiores(produto, 15);
console.log(resultado);
