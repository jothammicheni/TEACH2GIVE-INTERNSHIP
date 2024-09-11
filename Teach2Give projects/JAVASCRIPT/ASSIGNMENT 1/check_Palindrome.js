
function check_palindrome(str) {
    var punctuation = /[\.,?!]/g

    let string=str.toLowerCase().replace(punctuation,"").replace(/\s+/g, '')
    

    const strRev =  str.split('').reverse().join('').replace(punctuation,"").replace(/\s+/g, '').toLowerCase()  
   
    if(string===strRev){
        console.log(true);
    }else{
        console.log(false); 
    }

    
}

check_palindrome('A man, a plan, a canal, panama')
check_palindrome('was it a car or a cat i saw?')
check_palindrome('Hello,world!')


