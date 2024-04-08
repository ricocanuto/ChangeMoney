const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const firstSelect = document.querySelector(".first-select");

async function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  // Limpar a formatação da moeda (remover vírgulas e pontos)
  const cleanedValue = inputCurrencyValue.replace (/[,.]/g, '');
  // Verificar se é um número válido
  if (isNaN(cleanedValue)) {
    alert("Por favor, insira um valor numérico válido.");
    return;
  }
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");
  // URL da API para acessar dados atualizados
  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,JPY-BRL,GBP-BRL").then(response => response.json())

  const dolarToday = data.USDBRL.high
  const euroToday = data.EURBRL.high
  const ieneToday = data.JPYBRL.high
  const libraToday = data.GBPBRL.high

  // console.log(currencySelect.value)
  // const dolarToday = 4.95
  // const euroToday = 5.34
  // const libraToday = 6.23
  // const ieneToday = 0.04

  if (currencySelect.value == "dolar" && firstSelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday)
  }
  if (firstSelect.value == "dolar" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * dolarToday)
  }
  if (currencySelect.value == "euro" && firstSelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / euroToday)
  }
  if (firstSelect.value == "euro" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * euroToday)
  }
  if (currencySelect.value == "libra" && firstSelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday)
  }
  if (firstSelect.value == "libra" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * libraToday)
  }
  if (currencySelect.value == "iene" && firstSelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue / ieneToday)
  }
  if (firstSelect.value == "iene" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * ieneToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

  function formatCurrency() {

    switch (firstSelect.value) {
      case "dolar":
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(inputCurrencyValue);

        break;
      case "real":
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(inputCurrencyValue);

        break;
      case "euro":
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "GBP",
        }).format(inputCurrencyValue);

        break;
      case "libra":
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(inputCurrencyValue);

        break;
      case "iene":
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
          style: "currency",
          currency: "JPY",
        }).format(inputCurrencyValue);

        break;

      default:
        break;
    }
  }
  formatCurrency()
}

function changeCurrency() {
  const currency2 = document.getElementById(".currency-name-select-2") // mapeia o nome da segunda moeda
  const currency1 = document.getElementById(".currency-name-select-1") // mapeia o nome da primeira moeda
  const imageFirstSelect = document.querySelector(".image-first-select") // mapeia a primeira imagem
  const currencyImage = document.querySelector(".currency-img") // mapeia a segunda imagem


  if (currencySelect.value == "dolar") {
    currency2.innerHTML = "Dólar"
    currencyImage.src = "./Assets/estados-unidos (1) 1.png"
  }
  if (firstSelect.value == "dolar") {
    currency1.innerHTML = "Dólar"
    imageFirstSelect.src = "./Assets/estados-unidos (1) 1.png"
  }
  if (currencySelect.value == "real") {
    currency2.innerHTML = "Real"
    currencyImage.src = "./Assets/brasil 2.png"
  }
  if (firstSelect.value == "real") {
    currency1.innerHTML = "Real"
    imageFirstSelect.src = "./Assets/brasil 2.png"
  }
  if (currencySelect.value == "euro") {
    currency2.innerHTML = "Euro"
    currencyImage.src = "./Assets/logo-euro.png"
    currencyImage.style.width = "52px"
    currencyImage.style.heith = "52px"
  }
  if (firstSelect.value == "euro") {
    currency1.innerHTML = "Euro"
    imageFirstSelect.src = "./Assets/logo-euro.png"
    imageFirstSelect.style.width = "52px"
    imageFirstSelect.style.heith = "52px"
  }
  if (currencySelect.value == "libra") {
    currency2.innerHTML = "Libra"
    currencyImage.src = "./Assets/logo-moeda-UK.png"
    currencyImage.style.width = "52px"
    currencyImage.style.heith = "52px"
  }
  if (firstSelect.value == "libra") {
    currency1.innerHTML = "Libra"
    imageFirstSelect.src = "./Assets/logo-moeda-UK.png"
    imageFirstSelect.style.width = "52px"
    imageFirstSelect.style.heith = "52px"
  }
  if (currencySelect.value == "iene") {
    currency2.innerHTML = "Iene";
    currencyImage.src = "./Assets/logo-moeda-JPN.png";
    currencyImage.style.width = "52px"
    currencyImage.style.heith = "52px"
  }
  if (firstSelect.value == "iene") {
    currency1.innerHTML = "Iene";
    imageFirstSelect.src = "./Assets/logo-moeda-JPN.png";
    imageFirstSelect.style.width = "52px"
    imageFirstSelect.style.heith = "52px"
  }

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
firstSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)