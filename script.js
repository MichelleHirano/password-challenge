// Assignment code here

//Lowercase
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

//Numeric
var numValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


//Special Characters
var spChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

//var allChar = lowerCase + upperCase + numericValue + specialCharacters

var newArray = []


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
    if(lcChoice){
      newArray.push.apply(newArray, lowerCase);
      console.log(newArray);
    }

  var ucChoice = confirm("How about uppercase chacracters?");
  if(ucChoice){
    newArray.push.apply(newArray, ucChoice);
    console.log(newArray);
  }
    
  var numchoice = confirm("Would you like numbers?");
  if(numchoice){
    newArray.push.apply(newArray, numValue);
    console.log(newArray);
  }

  var spChoice = confirm("How about special charcaters? Like & or $?");
  if(spChoice){
    newArray.push.apply(newArray, spChar);
    console.log(newArray);
  }

var password = "";
  for(i = 0; i===number; i++){
    password += newArray[Math.floor(Math.random()* newArray.number)]
  }
return password;

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
