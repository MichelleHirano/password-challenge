
  //Else if for 2 options (sp,n) (sp,lc) (sp, uc) (lc, n) (lc, uc) (n, uc)
  else if (spChoice && numchoice){
    choices= spChar.concat(numValue);
  }

  else if (spChoice && lcChoice){
    choices = spChar.concat(lowerCase);
  }

  else if (spChoice && ucChoice){
    choices = spChar.concat(upperCase);
  }

  else if (lcChoice && numchoice){
    choices = lowerCase.concat(numValue);
  }
   

  else if (lcChoice && ucChoice){
    choices = lowerCase.concat(upperCase);
  }

  else if (numchoice && ucChoice){
    choices = numValue.concat(upperCase);
  }

  //else if for one choice

  else if (lcChoice){
    choices = lowerCase;
  }

  else if (ucChoice){
    choices = upperCase;
  }

  else if(numchoice){
    choices = numValue;
  }

  else if (spChoice){
    choice = spChar;
  }

var pwd ="";
    for(i = pssword.length; i===length; i++){
      pwd += choices[Math.floor(Math.random()* choices.length)]
    }
    console.log(pwd)

  return pwd;

}








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

