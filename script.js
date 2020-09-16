// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%&*()_-~?.";

function generatePassword() {
  var randomPass = "";
  var passFeatures = "";

  var passLength = parseInt(
    prompt(
      "How long do you want your password to be? Please select a number between 8 - 128"
    )
  );

  if (passLength < 8 || passLength > 128 || !passLength) {
    alert("Please select a number between 8 - 128");
    parseInt(
      prompt(
        "How long do you want your password to be? Please select a number between 8 - 128"
      )
    );
  } else if (passLength >= 8 && passLength <= 128) {
  }

  var lowerCaseUse = confirm(
    "would you like your password to include lower case characters?"
  );

  if (lowerCaseUse) {
    passFeatures = passFeatures + lowerCase;
  }

  var upperCaseUse = confirm(
    "would you like your password to include upper case characters?"
  );

  if (upperCaseUse) {
    passFeatures = passFeatures + upperCase;
  }

  var numberUse = confirm("Would you like your password to include numbers?");

  if (numberUse) {
    passFeatures = passFeatures + numberUse;
  }

  var symbolUse = confirm("Would you like your password to include symbols?");

  if (symbolUse) {
    passFeatures = passFeatures + symbolUse;
  }

  if (passLength) {
    for (var i = 0; i < passLength; i++);
    {
      randomPass =
        randomPass +
        passFeatures.charAt(Math.floor(Math.random() * passFeatures.length));
    }
  }

  if (
    lowerCaseUse === false &&
    upperCaseUse === false &&
    numberUse === false &&
    symbolUse === false
  ) {
    alert("Please select at least one criteria to generate your password");
    var lowerCaseUse;
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
