const input = document.querySelector("input");
const select = document.querySelector("select");
const button = document.querySelector("button");

input.addEventListener("focus", function () {
  console.log("dei um foco");
});

select.addEventListener("change", function () {
  console.log(select.value);
});

button.addEventListener("click", function () {
  alert("clicou");
});
