
function isCaseInsensitivePalindrome(str) {
    const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedString = cleanedStr.split('').reverse().join('');


    return cleanedString === reversedString;
}

console.log(isCaseInsensitivePalindrome("A man, a plan, a canal, Panama")); 
console.log(isCaseInsensitivePalindrome("RaceCar"));                        
console.log(isCaseInsensitivePalindrome("Hello"));                          