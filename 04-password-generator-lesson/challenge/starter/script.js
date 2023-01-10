//for connecting num range num input
var characterRange = document.querySelector("#characterRange");
var numericRange = document.querySelector("#numericRange");
var specialCharatersCheckbox = document.querySelector("#specialCharaters");
var numericCharactersCheckbox = document.querySelector("#numericCharacters");
var lowerCasedCharactersCheckbox = document.querySelector("#lowerCasedCharacters");
var upperCasedCharactersCheckbox = document.querySelector("#upperCasedCharacters");

characterRange.addEventListener("change", function() {
  console.log(characterRange.value)
  numericRange.value = characterRange.value
})

numericRange.addEventListener("change", function(){
  characterRange.value = numericRange.value
})


// Array of special characters to be included in password


var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  // get all input

  // get the number of characters
  var numberOfChar = characterRange.value;


  // get include special characters
  var includeSpecial =specialCharatersCheckbox.checked // true or false


  // get include numeric character
  var includeNumeric = numericCharactersCheckbox.checked // true or false

  // get include lowercase character
  var includeLower = lowerCasedCharactersCheckbox.checked // true or false

  // get include lowercase character
  var includeUpper = upperCasedCharactersCheckbox.checked // true or false

  return numberOfChar, includeSpecial, includeNumeric, includeLower, includeUpper




}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



