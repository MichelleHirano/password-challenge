// Assignment code here

//Lowercase
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

//Numeric
var numValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


//Special Characters
var spChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

//var choices outside the if statement to concat

var choices = "";


//Length of password

function generatePassword() {

  var number = 0
  while (number < 8 || number > 128) {
    number = window.prompt("How long would you like your password to be? Enter a number between 8-128");
    console.log(number);
  }
  //Where while loop ends
  console.log("after ", number)

  //Prompt for character types
  var lcChoice = confirm("Would you like your password to contain lowercase characters?");
  var ucChoice = confirm("How about uppercase chacracters?");
  var numchoice = confirm("Would you like numbers?");
  var spChoice = confirm("How about special charcaters? Like & or $?");
 
  
  //If for  negative on all 4 options
  if (!lcChoice && !ucChoice && !numchoice && !spChoice){
   prompt = alert("You must choose a criteria!");
   
  }

  //Else if for all 4 character options
 if (lcChoice && ucChoice && numchoice && spChoice){
    choices= spChar.concat(numValue, upperCase, lowerCase);
  }
   
  //Else if for 3 options (lc, uc, n) (uc, n, sp) (n, sp, lc) (sp, lc, uc)
  else if (lcChoice && ucChoice && numchoice){
    choices= lowerCase.concat(numValue, upperCase);
  }

  else if (lcChoice && ucChoice && spChoice){
    choices= lowerCase.concat(spChar, upperCase);
  }

  else if (lcChoice && spChoice && numchoice){
    choices= lowerCase.concat(numValue, spChar);
  }

   else if (spChoice && ucChoice && numchoice){
    choices= spChar.concat(numValue,upperCase);
  } 

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
