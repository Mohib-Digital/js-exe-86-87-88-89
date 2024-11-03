function validateEmail() {
  var eEntered = document.getElementById("email").value;

  // let suppose Email: saadafr55@gmail.com
  // console.log(eEntered.indexOf(' ')); // -1
  // console.log(eEntered.indexOf('.')); // 15
  // console.log(eEntered.indexOf('@')); // 9
  // console.log(eEntered.length-5); // 14
  // console.log(eEntered.length-3); // 16
  // console.log(eEntered.length) // 19


  // return false;

  var addressIsLegal = true;

  // Check if there are spaces in the email address
  if (eEntered.indexOf(" ") !== -1) {  // 4 !== -1  
      alert("No spaces allowed in address.");
      return false;
  }

  // Check if "@" is in a valid position
  if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
      alert("Invalid position of '@' symbol.");
      return false;
  }

  // Check if there is a period and enough characters after it
  if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 || eEntered.indexOf(".") > eEntered.length - 3) {
      alert("Invalid domain name.");
      return false;
  }

  return true; // Email is valid
}


function validateEmail() {
  var eEntered = document.getElementById("email").value;
  var emailPattern = /^[\w\-\.\+]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(eEntered)) {
      alert("Please enter a valid email address.");
      return false;
  }
  return true;
}