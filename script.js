function
passwordText.


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; (password.generatePassword())
  

}

addEventListener
generateBtn.addEventListener("click", writePassword);
