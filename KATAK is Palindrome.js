function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Example in usage
console.log(`'KOPIKO' is palindrome: ${isPalindrome('KOPIKO')}`); // True
