let Eurovalue = document.querySelector(".form__Euro--js");
let PLNvalue = document.querySelector(".form__PLN--js");
let formElement = document.querySelector(".form--js");
let sum = document.querySelector(".form__sum--js");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let PLN = PLNvalue.value;
    let Euro = Eurovalue.value;
    let sumEuro = (PLN / Euro);
    sum.innerText = sumEuro;
});