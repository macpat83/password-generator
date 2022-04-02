// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const password_Options =  {
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    symbols: '!#$%&()*+,-./:;<=>?@[\]^_{|}~',
};

var passwordChar = "";

  var length = getPasswordLength();

  //var length = window.prompt("Enter a number from 8 to 128 for password length.");
  
   var lowerCase = window.confirm("Would you like to include lowercase letters?");
    if (lowerCase == true) {
      passwordChar += password_Options.lowerCase;
    };

  var upperCase = window.confirm("Would you like to include uppercase letters?");
  if (upperCase == true) {
    passwordChar += password_Options.upperCase;
  };

  var numeric = window.confirm("Would you like to include numeric and/or special characters?");
  if (numeric == true) {
    passwordChar += password_Options.numeric;
  };

  var symbols = window.confirm("Would you like to use symbols?")
  if (symbols == true) {
    passwordChar += password_Options.symbols;
  };

  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }
  return password;
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

