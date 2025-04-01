// laço FOR //
const aluno = ["Dom", "leo", "kelly"];
for (let i = 0; i < aluno.length; i++) {
  console.log(i);
}

// Laço for of
//Percorre os valores diretamente, sem precisar acessar índices.
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
  console.log(fruta);
}

let nome = "Dom";
for (let allName of nome) {
  console.log(allName);
}

// FOR iN
//Percorre as chaves Ou (propriedades) de um objeto ou array.
let brinquedos = {
  carrinho: "vermelho",
  boneca: "vestido azul",
  bola: "amarela",
  ursinho: "marrom",
};
for (let brinquedo in brinquedos) {
  console.log(brinquedo + " : " + brinquedos[brinquedo]);
}

// While //
let i = 0;
while (i < 10) {
  console.log(i);
  i += 2;
}
