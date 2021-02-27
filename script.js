// Assignment code here

//Length of password

function passwordLength(){
var number = window.prompt("How long would you like your password to be? Enter a number between 8-128");

if (number < 8 || number > 128)
  window.alert("Sorry please enter a length between 8 and 128");

}

passwordLength();

//Prompt for character types (upper, lower, symbols)


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
