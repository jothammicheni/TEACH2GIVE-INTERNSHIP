function countPalindromes(str) {
    let count = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            count++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }

    return count;
}


console.log(countPalindromes("aaa"));
console.log(countPalindromes("abc"));
console.log(countPalindromes("racecar"));
