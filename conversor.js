const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const firstSelect = document.querySelector(".first-select");

if (!convertButton || !currencySelect || !firstSelect) {
  console.error("One or more elements are not found in the DOM");
} else {
  currencySelect.addEventListener("change", changeCurrency);
  firstSelect.addEventListener("change", changeCurrency);
  convertButton.addEventListener("click", convertValues);
}

async function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const cleanedValue = parseFloat(inputCurrencyValue.replace(/[,.]/g, ''));

  if (isNaN(cleanedValue)) {
    alert("Por favor, insira um valor numérico válido.");
    return;
  }

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  try {
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,JPY-BRL,GBP-BRL");
    const data = await response.json();

    const rates = {
      USD: parseFloat(data.USDBRL.high),
      EUR: parseFloat(data.EURBRL.high),
      JPY: parseFloat(data.JPYBRL.high),
      GBP: parseFloat(data.GBPBRL.high),
      BRL: 1 // Adicionei BRL para conversão de/para Real diretamente
    };

    const fromCurrency = convertToISO4217(firstSelect.value);
    const toCurrency = convertToISO4217(currencySelect.value);

    let convertedValue;
    if (fromCurrency === "BRL") {
      convertedValue = cleanedValue / rates[toCurrency];
    } else if (toCurrency === "BRL") {
      convertedValue = cleanedValue * rates[fromCurrency];
    } else {
      convertedValue = cleanedValue * (rates[fromCurrency] / rates[toCurrency]);
    }

    currencyValueConverted.innerHTML = new Intl.NumberFormat(toCurrency === "BRL" ? "pt-BR" : "en-US", {
      style: "currency",
      currency: toCurrency,
    }).format(convertedValue);

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(cleanedValue);

    formatCurrency();
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro ao obter dados da API. Por favor, tente novamente mais tarde.");
  }
}

function convertToISO4217(currencyName) {
  switch (currencyName.toLowerCase()) {
    case "dolar":
      return "USD";
    case "real":
      return "BRL";
    case "euro":
      return "EUR";
    case "libra":
      return "GBP";
    case "iene":
      return "JPY";
    default:
      throw new Error(`Invalid currency name: ${currencyName}`);
  }
}

function formatCurrency() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");

  switch (firstSelect.value.toLowerCase()) {
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
        currency: "EUR",
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

function changeCurrency() {
  const currency2 = document.getElementById("currency-name-select-2");
  const currency1 = document.getElementById("currency-name-select-1");
  const imageFirstSelect = document.querySelector(".image-first-select");
  const currencyImage = document.querySelector(".currency-img");

  switch (currencySelect.value.toLowerCase()) {
    case "dolar":
      currency2.innerHTML = "Dólar";
      currencyImage.src = "./Assets/estados-unidos (1) 1.png";
      break;
    case "real":
      currency2.innerHTML = "Real";
      currencyImage.src = "./Assets/brasil 2.png";
      break;
    case "euro":
      currency2.innerHTML = "Euro";
      currencyImage.src = "./Assets/logo-euro.png";
      currencyImage.style.width = "52px";
      currencyImage.style.height = "52px";
      break;
    case "libra":
      currency2.innerHTML = "Libra";
      currencyImage.src = "./Assets/logo-moeda-UK.png";
      currencyImage.style.width = "72px";
      currencyImage.style.height = "56px";
      break;
    case "iene":
      currency2.innerHTML = "Iene";
      currencyImage.src = "./Assets/logo-moeda-JPN.png";
      currencyImage.style.width = "52px";
      currencyImage.style.height = "52px";
      break;
    default:
      break;
  }

  switch (firstSelect.value.toLowerCase()) {
    case "dolar":
      currency1.innerHTML = "Dólar";
      imageFirstSelect.src = "./Assets/estados-unidos (1) 1.png";
      break;
    case "real":
      currency1.innerHTML = "Real";
      imageFirstSelect.src = "./Assets/brasil 2.png";
      break;
    case "euro":
      currency1.innerHTML = "Euro";
      imageFirstSelect.src = "./Assets/logo-euro.png";
      imageFirstSelect.style.width = "52px";
      imageFirstSelect.style.height = "52px";
      break;
    case "libra":
      currency1.innerHTML = "Libra";
      imageFirstSelect.src = "./Assets/logo-moeda-UK.png";
      imageFirstSelect.style.width = "56px";
      imageFirstSelect.style.height = "56px";
      break;
    case "iene":
      currency1.innerHTML = "Iene";
      imageFirstSelect.src = "./Assets/logo-moeda-JPN.png";
      imageFirstSelect.style.width = "52px";
      imageFirstSelect.style.height = "52px";
      break;
    default:
      break;
  }
}
