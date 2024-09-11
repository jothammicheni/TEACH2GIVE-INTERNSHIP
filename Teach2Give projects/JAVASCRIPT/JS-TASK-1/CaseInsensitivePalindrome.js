
function isCaseInsensitivePalindrome(str) {
    const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedString = cleanedString.split('').reverse().join('');


    return cleanedString === reversedString;
}

console.log(isCaseInsensitivePalindrome('Aba'));     
console.log(isCaseInsensitivePalindrome('Racecar'));  
console.log(isCaseInsensitivePalindrome('Palindrome')); 
console.log(isCaseInsensitivePalindrome('Madam'));    
console.log(isCaseInsensitivePalindrome('Hello'));                           