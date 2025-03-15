EXERCISE-2 
1.	50° FAHRENHEIT IS 10° CELSIUS 
JavaScript :
// Convertion Temperature From Fahrenheit to Celcius

function ConvertionTemp(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Example in usage

let tempF = 50; 
let tempC = ConvertionTemp(tempF);

console.log(`Temperature converted = ${tempC}°C`);

TypeScript :
// Convertion Temperature From Fahrenheit to Celcius

function ConvertionTemp (fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

// Example usage

const tempF: number = 50; 
const tempC: number = ConvertionTemp (tempF);

console.log(`Temperature converted: ${tempC}°C`);

2.	CONVERTION CENTIMETER TO KILOMETER
JavaScript :
// Convertion Centimeter (cm) to Kilometer (km)

function cmToKm(cm) {
    return cm / 100000;
}


// Convertion Kilometer (km)to Centimeter (cm)

function kmToCm(km) {
    return km * 100000;
}

// Example in usage
console.log(`100000 cm = ${cmToKm(100000)} km`);
console.log(`1 km = ${kmToCm(1)} cm`);

TypeScript :
// Convertion Centimeter (cm) to Kilometer (km)

function cmToKm(cm: number): number {
    return cm / 100000;
}

// Convertion Kilometer (km)to Centimeter (cm)

function kmToCm(km: number): number {
    return km * 100000;
}

// Example in usage
console.log(`100000 cm = ${cmToKm(100000)} km`);
console.log(`1 km = ${kmToCm(1)} cm`);

3.	CHEKING EVEN ODD NUMBER
JavaScript :
function isEven(n) {
    return n % 2 === 0;
}

// Example in usage
console.log(`1000 isEven: ${isEven(1000)}`); // True
console.log(`1001 isEven: ${isEven(1001)}`); // False

TypeScript :
function isEven(n: number): boolean {
    return n % 2 === 0;
}

// Example in usage
console.log(`1000 isEven: ${isEven(1000)}`); // True
console.log(`1001 isEven: ${isEven(1001)}`); // False

4.	HELLO WO
JavaScript:
function removeFirstOccurrence(string, searchString) {
    return string.replace(searchString, '', 1);
}

// Example in usage
const result = removeFirstOccurrence("Hello world", "rld");
console.log(result); // "Hel lo world"

TypeScript:
function removeFirstOccurrence(string: string, searchString: string): string {
    return string.replace(searchString, '', 1);
}

// Example in usage
const result: string = removeFirstOccurrence("Hello world", "rld");
console.log(result); // "Hel lo world"

5.	KATAK IS PALINDROME
JavaScript :
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Example in usage
console.log(`'KATAK' is palindrome: ${isPalindrome('KATAK')}`); // True

TypeScript :
function isPalindrome(s: string): boolean {
    return s === s.split('').reverse().join('');
}

// Example in usage
console.log(`' KATAK ' is palindrome: ${isPalindrome('KATAK')}`); // True

