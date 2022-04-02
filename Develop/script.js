// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




//function to set password length
var getPasswordLength = function () {
  var length = 0;
  
length = prompt("Please insert the length of your password");

if (length < 8) {
window.alert ("Password must be atleast 8 characters.");
getPasswordLength();
}
else if (length > 128) {
window.alert ("Password must be less than 128 characters");
getPasswordLength();

}

return length;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

