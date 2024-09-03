// Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
	titulo: "As Crônicas De Nárnia: Volume Único",
	autor: "C.S. Lewis",
	anoPublicacao: 2009,
	genero: "Fantasia",
};

for (const props in livro) {
	if (props !== "editora") {
		livro.editora = "HarperCollins";
	}
}

console.log(livro);
