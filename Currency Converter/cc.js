//Name: Destiney Allen-Suarez
//Professor: Gavin Stuart
//Class:SD 230
//Date: 11/20/24 
//cc.js

// Exchange rates for different currencies
const exchangeRates = {
    "AUD": 1.531863,
    "CAD": 1.36029,
    "CLP": 950.662057,
    "CNY": 7.128404,
    "EUR": 1.03203,
    "GBP": 0.920938,
    "INR": 81.255504,
    "JPY": 143.376504,
    "RUB": 57.875038,
    "USD": 1, // Base currency
    "ZAR": 17.92624
};

// Function to format currency
function formatCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount)) {
        document.getElementById("amount").value = amount.toFixed(2);
    }
}

// Function to convert the amount
function convertCurrency() {
    const baseCurrency = document.getElementById("baseCurrency").value;
    const targetCurrency = document.getElementById("targetCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const resultElement = document.getElementById("conversionResult");

    // Check for valid input
    if (isNaN(amount) || !exchangeRates[baseCurrency] || !exchangeRates[targetCurrency]) {
        resultElement.textContent = "Invalid input. Please check your currency codes and amount.";
        return;
    }

    // Convert the amount
    const convertedAmount = (amount * exchangeRates[targetCurrency]) / exchangeRates[baseCurrency];
    resultElement.textContent = `${amount} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;

    // Display conversion rates
    displayConversionRates(baseCurrency, targetCurrency);

    // Show the conversion rates table section
    document.getElementById("conversionRates").style.display = "block";
}

// Function to display conversion rates for common increments
function displayConversionRates(baseCurrency, targetCurrency) {
    const usdToEurRates = document.getElementById("usdToEurRates");
    const eurToUsdRates = document.getElementById("eurToUsdRates");

    // Clear previous rates
    usdToEurRates.innerHTML = "";
    eurToUsdRates.innerHTML = "";

    // Example: Showing conversion for common increments (1, 5, 10, 50, 100)
    [1, 5, 10, 50, 100].forEach(amount => {
        const usdToEurRate = (amount * exchangeRates["EUR"]) / exchangeRates["USD"];
        const eurToUsdRate = (amount * exchangeRates["USD"]) / exchangeRates["EUR"];
        usdToEurRates.innerHTML += `<tr><td>${amount}</td><td>${usdToEurRate.toFixed(2)}</td></tr>`;
        eurToUsdRates.innerHTML += `<tr><td>${amount}</td><td>${eurToUsdRate.toFixed(2)}</td></tr>`;
    });
}

// Function to swap the selected currencies in the dropdowns
function swapCurrencies() {
    const baseCurrency = document.getElementById("baseCurrency");
    const targetCurrency = document.getElementById("targetCurrency");

    // Swap the values
    const temp = baseCurrency.value;
    baseCurrency.value = targetCurrency.value;
    targetCurrency.value = temp;
}

