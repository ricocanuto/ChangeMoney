const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    // Limpar a formatação da moeda (remover vírgulas e pontos)
    const cleanedValue = inputCurrencyValue.replace(/[,.]/g, '');
    // Verificar se é um número válido
    if (isNaN(cleanedValue)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");
    // URL da API para acessar dados atualizados
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,JPY-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const iene = data.JPYBRL.high

    // console.log(currencySelect.value)
    // const dolarToday = 4.95
    // const euroToday = 5.34
    // const libraToday = 6.23
    // const ieneToday = 0.04

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libra)
    }
    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / iene)
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}


function changeCurrency (){
    const currencyName = document.querySelector(".currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./Assets/estados-unidos (1) 1.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./Assets/logo-euro.png"
        currencyImage.style.width = "52px"
        currencyImage.style.heith = "52px"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./Assets/logo-moeda-UK.png"
        currencyImage.style.width = "52px"
        currencyImage.style.heith = "52px"
    }
    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene";
        currencyImage.src = "./Assets/logo-moeda-JPN.png";
        currencyImage.style.width = "52px"
        currencyImage.style.heith = "52px"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)