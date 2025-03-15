function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Example in usage
console.log(`'KATAK' is palindrome: ${isPalindrome('KATAK')}`); // True
