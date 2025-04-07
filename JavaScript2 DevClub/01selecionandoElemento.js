/*
selecionando elemento
-- getElementById = trás um elemento

-- getElementsByClassName = trás diversos elementos (html collection)

-- getElementsByTagName = trás diversos elementos (html collection)

-- querySelector = trás um elemento, o primeiro que encontrar (element)

-- querySelectorAll = trás todos os elementos que encontrar (node list)
*/

const elemento = document.getElementById("mainText");
const elementoClass = document.getElementsByClassName("paragraph");
const tagName = document.getElementsByTagName("p");
const selector = document.querySelector("p");
const querySelectorAll = document.querySelectorAll("p");
