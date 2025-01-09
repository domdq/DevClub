const table = (number) => {
  if (number > 10 || number < 1) {
    console.log("somente numero de 1 a 10");
    return;
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number} = ${i * number}`);
  }
};
table(5);
