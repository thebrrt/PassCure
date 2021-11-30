// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

/* TO DO
Criteria Prompts:
 * length
 * character types
  * lowercase
  * uppercase
  * numeric
  * special characters
INPUT SHOULD BE VALIDATED
*/

function generatePassword () {
  var desiredPassword = {
    desiredLength: function () {
      switch(switchparseInt(window.prompt("Define Length of Password. (8-128)"))) {
      }
      console.log(desiredPassword.desiredLength);
    },

    includeLowercase: function() {
      switch (window.confirm("Include Lowercase Characters?")) {
      case true:
        return true;
  
      case false:
        return false;
      }
    },
    
    includeUppercase: function() {
      switch (window.confirm("Include Uppercase Characters?")) {
        case true:
          return true;
        case false:
          return true;
      }
    },

    includeNumericCharacters: function() {
      switch (window.confirm("Include Numeric Characters?")) {
        case true:
          return true;
        case false:
          return false;
      }
    },

    includeSpecialCharacters: function() {
      switch (window.confirm("Include Special Characters?")) {
        case true:
          return true;
        case false:
          return false;
      }
    }
  };
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
