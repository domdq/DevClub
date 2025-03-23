/* for each*/
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Carlos", idade: 22 },
  { nome: "Daniela", idade: 28 },
  { nome: "Eduardo", idade: 35 },
  { nome: "Fernanda", idade: 27 },
  { nome: "Gustavo", idade: 31 },
];
let allPessoa = 0;
pessoas.forEach((pessoa, index) => {
  allPessoa += pessoa.idade;
});
const idadesMedia = allPessoa / pessoas.length;
console.log(`
  a media e ${idadesMedia.toFixed(0)}
`);
