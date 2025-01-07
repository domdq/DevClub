/* Controle de fluxo if / else

if = SE
else = SE NÃO

*/
let elaMeAma = false;
if (elaMeAma) {
  console.log("ela gosta de vc");
} else {
  console.log("ela não gosta de vc");
}

/* Controle de fluxo if else */

const temperatura = 36;
if (temperatura == 35) {
  console.log("esta ok");
} else if (temperatura > 35) {
  console.log("esta com febre");
} else {
  console.log("esta baixa");
}

/* controle de fluxo swith case*/

let temp = 40;
switch (temp) {
  case 30:
    console.log("esta baixa");
    break;

  case 35:
    console.log("esta normal");
    break;

  case 40:
    console.log("esta com febre");
    break;

  default:
    console.log("não encontrou nada");
    break;
}
