function removeFirstOccurrence(string: string, searchString: string): string {
    return string.replace(searchString, '', 1);
}

// Example in usage
const result: string = removeFirstOccurrence("Hello world", "rld");
console.log(result); // "Hel lo world"
