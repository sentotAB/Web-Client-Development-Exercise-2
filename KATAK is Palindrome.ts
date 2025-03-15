function isPalindrome(s: string): boolean {
    return s === s.split('').reverse().join('');
}

// Example in usage
console.log(`' KATAK ' is palindrome: ${isPalindrome('KATAK')}`); // True
