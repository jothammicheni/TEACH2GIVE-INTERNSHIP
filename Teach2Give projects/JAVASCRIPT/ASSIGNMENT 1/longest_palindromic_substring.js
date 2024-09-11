function longestPalindromicSubstring(str) {
    if (!str || str.length <= 1) return str;

    let start = 0, maxLength = 1;

    // Helper function to expand around the center and check for palindromes
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            let currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i, i);      
        expandAroundCenter(i, i + 1); 
    }

    return str.substring(start, start + maxLength);
}

console.log(longestPalindromicSubstring('babbd')); 
console.log(longestPalindromicSubstring('cbdd')); 
