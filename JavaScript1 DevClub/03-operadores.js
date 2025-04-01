/// Operadores ///
/*
Adição +
subtração -
Multiplicação *
Divisão /
Exponenciação **
modulo %
*/

/// Operadores de Atribuição //
/* 
Adição +=
subtração -=
Multiplicação *=
Divisão /=
modulo %=
*/

/// Operadores de comparação ///
/*

< menor que
> maior que
<= menor igual que
>= maior igual que
== igual -->  compar o valor
=== totalmente igual -- > compar o valor e o tipo do valor
!= diferente -->  compar o valor
!== totalmente diferente --> compar o valor e o tipo do valor

*/

// operadores lógicos
/*

&& e
true && true = true
true && false = false
false && false = false

|| ou 
true || true = true
true || false = true
false || false = false

! não
!true = false
!false = true
*/

// operador ternário
/* 
? se
: se não
*/
let chuva = true;
let guardaChuva = chuva ? "levar" : "deixar";

/// Typeof e delete
/*
typeof -> mostra o tipo da variável
delete ->  deleta 
*/
let num = 5;
let string = "xxxx";
let objeto = {
  nome: "dom",
  idade: 23,
};
delete objeto.idade;
console.log(objeto);

console.log(typeof num);
