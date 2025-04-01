/* map
MAP
-- Cria um novo array partir do array percorrido (array original)
-- cria um novo array com a mesma quantidade de item do array original
--aceita 3 parâmetros
item do array
--index
--array completo
 */

const numbers = [1, 2, 3, 4];

const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Carlos", idade: 22 },
  { nome: "Daniela", idade: 28 },
  { nome: "Eduardo", idade: 35 },
  { nome: "Fernanda", idade: 27 },
  { nome: "Gustavo", idade: 31 },
];

const NewStudent = pessoas.map(function (pessoa) {
  const NewPessoas = {
    nome: pessoa.nome + " xxxxxx",
    idade: pessoa.idade - 5,
  };
  return NewPessoas;
});
console.log(NewStudent);

const newA = numbers.map(function (number) {
  return number * 2;
});
console.log(newA);
