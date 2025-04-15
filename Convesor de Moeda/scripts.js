const btn = document.getElementById("btn");
const select = document.getElementById("select");

const dólar = 5.5;
const euro = 6.0;

const convertValor = function () {
  const inputReal = document.getElementById("inputReal").value;

  const moneyReal = document.getElementById("real-text");
  const moneyDólar = document.getElementById("dolar-text");

  moneyReal.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  if (select.value === "US$ Dólar") {
    moneyDólar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dólar);
  }

  if (select.value === "€ Euro") {
    moneyDólar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro);
  }
};

const changeSelect = function () {
  const NewMoeda = document.getElementById("novaMoeda");
  const NewIMG = document.getElementById("moedaIMG");

  if (select.value === "US$ Dólar") {
    NewMoeda.innerHTML = "Dólar";
    NewIMG.src = "./assets/eua.png";
  }

  if (select.value === "€ Euro") {
    NewMoeda.innerHTML = "Euro";
    NewIMG.src = "./assets/euro.png";
  }
};

btn.addEventListener("click", convertValor);
select.addEventListener("change", changeSelect);
