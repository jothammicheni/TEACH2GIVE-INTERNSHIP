
function check_anagram(str1, str2) {
    let string1 = str1.toLowerCase()
    let string2 = str2.toLowerCase()


    if (string1.length !== string2.length) {
        console.log("error")

    } else {
        string1 = string1.split('')
        string2 = string2.split("")

        string1 = string1.sort().join('')
        string2 = string2.sort().join("")

        console.log("" + string1)
        console.log("" + string2)

        if (string1 === string2) {
            console.log(`${str1} and ${str2} are anagrams`)
        } else {
            console.log('not anagram')
        }
    }
}

check_anagram('Silent', 'listen')
check_anagram('abcf', 'bdca')