// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//function to generate password
function generatePassword() {
  //setting password parameters
  const password_Options =  {
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    symbols: '!#$%&()*+,-./:;<=>?@[\]^_{|}~',
};

//setting up password character variables
var passwordChar = "";

//calling the getpasswordlength function and setting the result to the variable length
  var length = getPasswordLength();

  
   //Asking if they want to include lowercase letters, if yes(true) casing will be included
   var lowerCase = window.confirm("Would you like to include lowercase letters?");
    if (lowerCase == true) {
      passwordChar += password_Options.lowerCase;
    };

    //Asking if they want to include uppercase letters, if yes(true) casing will be included
  var upperCase = window.confirm("Would you like to include uppercase letters?");
  if (upperCase == true) {
    passwordChar += password_Options.upperCase;
  };

  //Asking if they want to include numeric characters, if yes(true) numeric characters will be included
  var numeric = window.confirm("Would you like to include numeric and/or special characters?");
  if (numeric == true) {
    passwordChar += password_Options.numeric;
  };

//Asking if they want to include symbols, if yes(true) symbols will be included
  var symbols = window.confirm("Would you like to use symbols?")
  if (symbols == true) {
    passwordChar += password_Options.symbols;
  };

  //setting up password variable
  var password = "";
  //for loop to create password length
  for (let i = 0; i < length; i++) {
    //Using Math.random and math.floor to randomize characters used and set password
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }
  //return password
  return password;
     }
 //function to set password length
var getPasswordLength = function () {
  var length = 0;
  
length = prompt("Please insert the length of your password");

// if input is less than 8, user will get alert stating password must be at least 8 characters and then asked again.
if (length < 8) {
window.alert ("Password must be atleast 8 characters.");
getPasswordLength();
}
// if input is more than 128, user will get alert stating password must be less than 128 characters and then asked again.
else if (length > 128) {
window.alert ("Password must be less than 128 characters");
getPasswordLength();

}
//return length
return length;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

