
function isPlandrome(str){
   const cleanStr= str.toLowerCase().replace(/[^a-z0-9]/g,'');
   const reversedStr= cleanStr.split('').reverse().join('');
   return cleanStr===reversedStr;
}


function palindromeChecker(){
const inputText = document.getElementById('inputText')
const result = document.getElementById('result')
  if(isPlandrome(inputText.value)){
   result.textContent = `"${inputText.value}" is a Palindrome`
  }else{
    result.textContent = `"${inputText.value}" is not a Palindrome`
  }
  result.classList.add('fadeIn')
inputText.value=''  // to make empty after checcked
}

document.getElementById('checkButton')
.addEventListener("click",palindromeChecker);