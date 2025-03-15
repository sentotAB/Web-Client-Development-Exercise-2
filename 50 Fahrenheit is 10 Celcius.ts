// Convertion Temperature From Fahrenheit to Celcius

function ConvertionTemp (fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

// Example usage

const tempF: number = 50; 
const tempC: number = ConvertionTemp (tempF);

console.log(`Temperature converted: ${tempC}°C`);
