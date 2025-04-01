/* 
Reduce
--> retorna um Valor (Pode ser um novo array, um objeto, string, number,et...)
-- aceitar 4 parâmetros
-- valor atual 
-- index
-- array completo
*/

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (acc, current) {
  return acc + current;
}, 0);
console.log(sum);
