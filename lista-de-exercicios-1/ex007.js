// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

var prompt = require("prompt-sync")();

const pricesApple = {
  retail: 0.3,
  wholesale: 0.25,
};

let quantity = +prompt("Quantidade de maçãs? ");

if (quantity < 12) {
  let price = quantity * pricesApple.retail;
  console.log(`${quantity} maçãs a R$ ${pricesApple.retail}0 custa R$ ${price}`);
} else {
  let price = quantity * pricesApple.wholesale;
  console.log(
    `${quantity} maçãs a R$ ${pricesApple.wholesale} custa R$ ${price}`
  );
}
