/* operadores typeof e delete

typeof = mostra qual e o tipo
delete = deleta alguma propriedade do objeto

*/

const string = "oi";
const number = 5;
console.log(typeof number); // vai mostra qual tipo da variável

const obj = {
  nome: "dom",
  age: 15,
  altura: 1.67,
};
delete obj.altura; // vai deleta a propriedade e valor do objeto
console.log(obj);
