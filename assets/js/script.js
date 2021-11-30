// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

/* TO DO
INPUT SHOULD BE VALIDATED
*/
// Arrays for password character selection during generation
var genLetters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i" , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var genNumeric= [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];
var genSpecialCharacters = [
  " ", "!", '"', "#", "$", "%", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "|", "}", "~"
];

console.log(genLetters.length);
console.log(genNumeric.length);
console.log(genSpecialCharacters.length);

// Variable for character criteria
var charCriteriaCounter = 0;
var criteriaAggregate = [];

// Password Criteria Functions
function getCriteriaLength() {
  var passLength = window.prompt("Please enter just a number from 8 - 128 to define the length of the password");
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
  window.alert("I didn't understand that. Please try again");
  getCriteriaLength();
  } else {
    passLength = Math.floor(Number(passLength));
  }
  return passLength;
}

function getCriteriaPrompt(criteria) {
  switch (window.confirm("Include "+ criteria + " Characters?")) {
    case true:
      charCriteriaCounter++;
      criteriaAggregate += criteria;
      return true;
    case false:
      return false;
  }
}

// Utility Functions
function randomNumRange(min, max) {
  Math.floor(Math.random() * (max - min) + min);
}

function randomCharacterSelect(criteriaAmount, includeUppercase, includeLowercase, includeNumeric, includeSpecial) {
  for (i=0; i < criteriaAmount; i++) {
  }
  var criteriaFlip = randomNumRange(1, criteriaAmount);
  switch (criteriaAggregate[criteriaFlip]) {
    case "Uppercase":
      return toUpperCase(genLetters[randomNumRange(0, 25)]);
    case "Lowercase":
      return toLowerCase(genLetters[randomNumRange(0, 25)]);
    case "Numeric":
      return genNumeric[randomNumRange(0, 9)];
    case "Special":
      return genSpecialCharacters[randomNumRange(0, 31)];
  }
}

// Password Character Criteria Generator Function
function passwordObjectGen() {
  charCriteriaCounter = 0;
  criteriaAggregate = [];

  var password = {
    passGen: "",
    passLength: getCriteriaLength(),
    passCriteriaUppercase: getCriteriaPrompt("Uppercase"),
    passCriteriaLowercase: getCriteriaPrompt("Lowercase"),
    passCriteriaNumeric: getCriteriaPrompt("Numeric"),
    passCriteriaSpecial: getCriteriaPrompt("Special"),
  };

  // Check to see if at least one criteria is enabled
  if (password.passCriteriaUppercase === false && password.passCriteriaLowercase === false && password.passCriteriaNumeric === false && password.passCriteriaSpecial === false) {
    window.alert("I can't generate a password for you if I can't use any type of characters at all. Please try again");
    passwordObjectGen();
  } else {
    return password;
  }
}

// Function that FINALLY generates the password
function generatePassword() {
  // Create password object, calling prompt functions to retrieve password generation criteria
  var password = passwordObjectGen();
  console.log(password);

  // For loop generates password.
  for (i=0; i < password.passLength; i++) {
    password.passGen = password.passGen + randomCharacterSelect(charCriteriaCounter, password.passCriteriaUppercase, password.passCriteriaLowercase, password.passCriteriaNumeric, password.passCriteriaSpecial);
    console.log(password.passGen);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);