// Function //
// Exemplo de função
function calculaMedia(num1, num2, num3) {
  let media = num1 + num2 + num3;
  return media;
}
console.log(calculaMedia(5, 5, 5));

// função anonima //
//exemplo
const mediA = function calculamediA(nume1, nume2, nume3) {
  let mediANume = (nume1, nume2, nume3);
  return mediANume;
};
console.log(mediA(2, 4, 6));

/* Arrow Function */
// exemplo de arrow função
const areaQuadrado = (lado) => {
  let area = lado * lado;
  return area;
};
console.log(areaQuadrado(5));

/* parâmetros */
//exemplo de parâmetro
function somaNumeros(n1 = 3, n2 = 6, n3 = 9) {
  return n1 + n2 + n3;
}
console.log(somaNumeros());
console.log(somaNumeros(10));
console.log(somaNumeros(10, 15));
console.log(somaNumeros(10, 15, 20));
