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
  //Step 1: get all input

  // get the number of characters
  var numberOfChar = characterRange.value;


  // get include special characters
  var includeSpecial =specialCharatersCheckbox.checked // true or false


  // get include numeric character
  var includeNumeric = numericCharactersCheckbox.checked // true or false

  // get include lowercase character
  var includeLowerCased = lowerCasedCharactersCheckbox.checked // true or false

  // get include lowercase character
  var includeUpperCased = upperCasedCharactersCheckbox.checked // true or false

  

  //step 2: Based from the input, create a pool of characters
  var characterPool = [];

  // If they checkbox special character, add spececial characters to character 
  if (includeSpecial == true) {
    characterPool = characterPool.concat(specialCharacters);

  if (includeNumeric == true) 
      characterPool = characterPool.concat(numericCharacters);

  if (includeLowerCased == true) 
        characterPool = characterPool.concat(lowerCasedCharacters);

  if (includeUpperCased == true) 
        characterPool = characterPool.concat(upperCasedCharacters);

  

  // Step 3: Actual generation of password

  // generate a random number
  
   var password = ""

  for(i = 0; i < numberOfChar; i++ ) {
    var randomNum = Math.floor(Math.random() *characterPool.length)
    var randomChar = characterPool[randomNum];

    password = password + randomChar;

  }


    return password;

  }


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



