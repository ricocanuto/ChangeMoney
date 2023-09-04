const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    // Limpar a formatação da moeda (remover vírgulas e pontos)
    const cleanedValue = inputCurrencyValue.replace(/[,.]/g, '');
     // Verificar se é um número válido
     if (isNaN(cleanedValue)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 4.95
    const euroToday = 5.34
    const libraToday = 6.23
    const ieneToday = 0.04

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}


function changeCurrency() {
    const currencyName = document.querySelector(".currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src="./Assets/estados-unidos (1) 1.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src="./Assets/logo-euro.png"
        currencyImage.style.width = "52px"
        currencyImage.style.heith = "52px"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src="./Assets/logo-moeda-UK.png"
        currencyImage.style.width = "52px"
        currencyImage.style.heith = "52px"
    }
    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene";
        currencyImage.src="./Assets/logo-moeda-JPN.png";
        currencyImage.style.width = "52px"
        currencyImage.style.heith = "52px"
    }
    
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)