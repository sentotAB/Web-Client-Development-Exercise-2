function removeFirstOccurrence(string, searchString) {
    return string.replace(searchString, '', 1);
}

// Example in usage
const result = removeFirstOccurrence("Hello world", "rld");
console.log(result); // "Hel lo world"