// Temas
const unitsByTheme = {
    temperature: ["Celsius", "Fahrenheit", "Kelvin"],
    distance: ["Quilômetros", "Metros", "Milhas"],
    currency: ["USD", "EUR", "BRL"],
}

// Função para atualizar as opções de unidade com base no tema selecionado
function updateUnitsByTheme() {
    const theme = document.getElementById("theme-selector").value;
    const units = unitsByTheme[theme];
    const unitFromSelector = document.getElementById("unit-from");
    const unitToSelector = document.getElementById("unit-to");

    unitFromSelector.innerHTML = '';
    unitToSelector.innerHTML = '';

    units.forEach(unit => {
        const optionFrom = document.createElement("option");
        const optionTo = document.createElement("option");
        optionFrom.value = unit;
        optionTo.value = unit;
        optionFrom.innerHTML = unit;
        optionFrom.innerHTML = unit;
        unitFromSelector.appendChild(optionFrom)
        unitToSelector.appendChild(optionTo)
    });
}

// Temperatura
function convertTemperature() {
    if (from === to) return value;
    if (from === "Celsius") {
        return to === "Fahrenheit" ? (value * 9 / 5) + 32 : value + 273.15
    } else if (from === "Fahrenheit") {
        return to === "Celsius" ? (value - 32) * 5 / 9 : ((value - 32) * 5 / 9) + 273.15;
    } else {
        return to === "Celsius" ? value - 273.15 : (value - 273.15) * 9 / 5 + 32;
    }
}

// Distância
function convertDistance(value, from, to) {
    const toMeters = {
        "Quilômetros": value => value * 1000,
        "Metros": value => value,
        "Milhas": value => value * 1609.34
    };

    const fromMeters = {
        "Quilômetros": value => value / 1000,
        "Metros": value => value,
        "Milhas": value => value / 1609.34
    };

    return fromMeters[to](toMeters[from](value));
}

// Moeda
function convertCurrency(value, from, to) {
    const rates = {
        "USD": 1,     // Dólar Americano para USD.
        "EUR": 0.85,  // Euro para USD.
        "BRL": 5      // Real Brasileiro para USD.
    };

    const valueInUSD = value / rates[from];
    const convertedValue = valueInUSD * rates[to];

    return convertedValue;
}

// Função para conversão

// Evento para atualizar as opções ao mudar o tema

// Chamada inicial para configurar as opções