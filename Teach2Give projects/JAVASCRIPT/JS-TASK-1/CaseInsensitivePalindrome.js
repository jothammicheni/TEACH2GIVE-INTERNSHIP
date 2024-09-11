
function isCaseInsensitivePalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedStr = cleanedStr.split('').reverse().join('');


    return cleanedStr === reversedStr;
}

console.log(isCaseInsensitivePalindrome("A man, a plan, a canal, Panama")); 
console.log(isCaseInsensitivePalindrome("RaceCar"));                        
console.log(isCaseInsensitivePalindrome("Hello"));                          