// Acessando Propriedades de Objetos
// Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

const carro = {
	marca: "Renault",
	modelo: "Duster",
	ano: "2015",
	cor: "branco",
};

for (const props in carro) {
	console.log(`${props}: ${carro[props]} `);
}
