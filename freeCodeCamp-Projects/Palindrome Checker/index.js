function palindrome(str) {
  const pali = str
                .replace(/[^0-9a-z]/gi, '')
                .toUpperCase();

  for(let i = 0; i < pali.length / 2; i++){
    if(pali[i] !== pali[pali.length - 1 - i]){
      return false;
    }
  }

  return true;
}


//console.log(palindrome("five|\_/|four"));
palindrome("eye");