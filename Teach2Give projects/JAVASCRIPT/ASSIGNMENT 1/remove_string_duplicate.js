function remove_duplicate_chars(str) {

 return [...new Set(str)].join('')
  }
  
  console.log(remove_duplicate_chars("good"));
  console.log(remove_duplicate_chars("python"));
  console.log(remove_duplicate_chars("abcabc"));
  console.log(remove_duplicate_chars("1365451"));
  