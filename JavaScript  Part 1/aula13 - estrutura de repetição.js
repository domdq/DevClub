/*Estrutura de Repetição*/

// For --> O for é uma palavra mágica que ajuda a repetir algo várias vezes sem precisar escrever tudo de novo.
const myArray = ["dom", "kelly", "geyssy", "Pietra", "lavínia"];
for (let i = 0; i < myArray.length; i++) {
  console.log(`${myArray[i]} esta ok`);
}

// For of --> O for of é uma forma especial de usar o for que ajuda a percorrer um array ao Em vez de escrever tudo de novo.
let letras = "abcd";
let names = ["a1", "b2", "c3", "d4"];
for (let name of names) {
  console.log(name);
}

// For in --> Pegar propriedade por propriedade do objeto
const student = {
  nome: "Dom",
  idd: 23,
  altura: 1.67,
  sex: "M",
};
for (let propriedade in student) {
  console.log(`${propriedade} : ${student[propriedade]}`);
}

// While --> O while é outra palavra mágica que ajuda a repetir algo, mas com uma diferença: ele vai continuar fazendo a mesma coisa enquanto você quiser. Ou seja, ele repete até que você diga que não quer mais.
let doces = 10;
while (doces >= 10) {
  console.log(doces);
  doces -= 1;
}
