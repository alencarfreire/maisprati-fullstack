// A+ = 10
// A = 9,5
// A- = 9
// B+ = 8,5
// B = 8
// B- = 7,5
// C+ = 7
// C = 6,5
// C- = 6
// D+ = 5,5
// D = 5
// D- = 4,5
// F+ = 4
// F = 3,5
// F- = menos de 3

const nota1 = 9.9
const nota2 = 9.9
const nota3 = 9.9

const media = (nota1 + nota2 + nota3) / 3

console.log(`Média: ${media}`)

if (media >= 4 && media < 6) {
  console.log('Conceito D')
} else if (media >= 6 && media < 7) {
  console.log('Conceito C')
} else if (media >= 7 && media < 9) {
  console.log('Conceito B')
} else if (media >= 9 && media <= 10) {
  console.log('Conceito A')
} else {
  console.log('Conceito E')
}
