/*
Filter
-- Cria um novo array partir do array percorrido (array original)
-- cria um novo array APENAS com elementos filtrados
--aceita 3 parâmetros
item do array
--index
--array completo  
*/
const Vip = [
  { nome: "Ana", Vip: true },
  { nome: "Bruno", Vip: false },
  { nome: "Carlos", Vip: true },
  { nome: "Daniela", Vip: true },
  { nome: "Eduardo", Vip: false },
  { nome: "Fernanda", Vip: true },
  { nome: "Gustavo", Vip: false },
];

const VIPs = Vip.filter(function (client) {
  return client.Vip;
});
console.log(VIPs);

const pessoas = [
  { nome: "Ana", nota: 7 },
  { nome: "Bruno", nota: 8 },
  { nome: "Carlos", nota: 9 },
  { nome: "Daniela", nota: 10 },
  { nome: "Eduardo", nota: 6 },
  { nome: "Fernanda", nota: 5 },
  { nome: "Gustavo", nota: 5 },
];
const aprovado = pessoas.filter(function (pessoa) {
  return pessoa.nota >= 7;
});
console.log(aprovado);
