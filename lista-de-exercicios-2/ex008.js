// Criando Novos Arrays a Partir de Objetos
// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

const filmes = [
	{
		titulo: "Um Sonho de Liberdade",
		diretor: "Frank Darabont",
		anoLancamento: 1995,
	},
	{
		titulo: "Batman: O Cavaleiro das Trevas",
		diretor: "Christopher Nolant",
		anoLancamento: 2008,
	},
	{
		titulo: "O Poderoso Chefão",
		diretor: "Francis Ford Coppolat",
		anoLancamento: 1972,
	},
];

const titulosDosFilmes = [];

// biome-ignore lint/complexity/noForEach: <explanation>
filmes.forEach((filme) => {
	titulosDosFilmes.push(filme.titulo);
});

console.log(titulosDosFilmes);
