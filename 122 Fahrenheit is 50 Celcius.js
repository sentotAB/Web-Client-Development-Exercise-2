// Convertion Temperature From Fahrenheit to Celcius

function ConvertionTemp(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Example in usage

let tempF = 122; 
let tempC = ConvertionTemp(tempF);

console.log(`Temperature converted = ${tempC}°C`);
