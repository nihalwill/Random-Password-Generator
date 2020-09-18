// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%&*()_-~?.";

function generatePassword() {
  var password = "";
  var passFeatures = "";

  var passLength = parseInt(
    prompt(
      "How long do you want your password to be? Please select a number between 8 - 128"
    )
  );
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please refresh the page and select a number between 8 - 128");
    return "";
  } else {
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
      passFeatures = passFeatures + numbers;
    }

    var symbolUse = confirm("Would you like your password to include symbols?");

    if (symbolUse) {
      passFeatures = passFeatures + symbols;
    }

    if (
      lowerCaseUse === false &&
      upperCaseUse === false &&
      numberUse === false &&
      symbolUse === false
    ) {
      alert(
        "Please refresh the page and select at least one criteria to generate your password"
      );
      return "";
    } else {
      for (var i = 0; i < passLength; i++) {
        password =
          password +
          passFeatures.charAt(Math.floor(Math.random() * passFeatures.length));
        return password;
      }
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
