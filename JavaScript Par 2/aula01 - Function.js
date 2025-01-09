/* Function */

function print() {
  console.log("ola");
}
print(); // chamando a função

/* Argumentos e Parâmetros */
function somar(number1, number2) {
  console.log(number1 + number2);
}
somar(5, 3);

/*Return*/
function subtrair(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
console.log(`o resultado e ${subtrair(5, 3)}`);

/* arrow functions */
const multiplicar = (n1, n2) => {
  return n1 * n2;
};
console.log(multiplicar(6, 6));

/* exercício */

const calc = (numero1, numero2, operação) => {
  let resultado;
  switch (operação) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;

    default:
      console.log("nada");

      break;
  }
  return resultado;
};
console.log(calc(4, 5, "*"));
