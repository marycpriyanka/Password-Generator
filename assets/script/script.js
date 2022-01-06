// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*Generates a random password. */
function generatePassword()
{
  let password= "";
  let passwordLength = 8;
  let passwordCharList = [];
  
  // Gets the password length and character types from user.
  passwordLength = getLength();
  passwordCharList = getPasswordCharacterList();

  // Generates a random password of user selected length and from the user selected character types.
  let index = 0;
  for(let i = 0; i < passwordLength; i++)
  {
    index = Math.floor(Math.random() * passwordCharList.length);
    password += passwordCharList[index];
  }

  return password;
}

/*Gets the password length from user. */
function getLength()
{
  //Asks user to enter number between 8 and 128.
  let length = prompt("What length do you want your password to be? (Please enter a number between 8 and 128.)", "8");

  //Checks the user input and if the validation fails, will call the function again.
  if(!validateLength(length))
  {
    length = getLength();
  }
 
  return length;
}

/*Validates the length entered by user. */
function validateLength(length)
{
  if(length >= 8 && length <= 128)
  {
    return true;
  }
  else
  {
    return false;
  }
}

/*Gets the character types to include in the password. */
function getPasswordCharacterList()
{
  //Defines the character types.
  const lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "W", "Y", "Z"];
  const numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", ".", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  // Initializes the password character list to empty.
  let passwordCharList = [];

  // Asks the user which character types to include in the password.
  let userInput = confirm("Do you want lowercase letters in your password?");
  addToCharList(lowerCaseChar);

  userInput = confirm("Do you want uppercase letters in your password?");
  addToCharList(upperCaseChar);

  userInput = confirm("Do you want numeric characters in your password?");
  addToCharList(numericChar);

  userInput = confirm("Do you want special characters in your password?");
  addToCharList(specialChar);

  // Adds the characters to the password list for which the user has replied yes.
  function addToCharList(charList)
  {
    if(userInput)
    {
      passwordCharList = passwordCharList.concat(charList);
    }
  }

  // User has to select atleast one character type.
  if(!passwordCharList.length)
  {
    alert("Please include atleast one of lowercase, uppercase, numeric or special characters in your password.");
    passwordCharList = getPasswordCharacterList();
  }

  return passwordCharList;
}