
let myName = "Mohib ";
console.log(myName.indexOf(' '))
// return false;

// Password Validation Function
function checkPassword() {
  
  try {
    var passwordValue = document.getElementById('f1').value;
    // console.log(passwordValue);
    // return false;

    // must enter 8-12 characters
    if(passwordValue.length < 8 || passwordValue.length > 12) {
      throw "Please you must enter 8-12 characters";
    }


    // must enter at least 1 number
    var atLeastOneNumber = false;
    for(var i = 0; i < passwordValue.length; i++) {
      if(!isNaN(passwordValue[i])){  
        // isNaN() retrun true or false
        // is !isNaN() return notTrue or notFalse
        atLeastOneNumber = true;
        break;
      }
    }

    if (!atLeastOneNumber) {  
      // !true = false
      // !false = true
      throw "Include at least 1 number."
    }


    // Check for spaces in the password
    if(passwordValue.indexOf(' ') !== -1) {
      // conditions means:
      // -1 !== -1 = false
      // 3 !== -1 = true
      throw "No spaces in the password, please."

    }


  }
  catch (error) {
    // display error
    alert(error)
    return false;
  }
} 