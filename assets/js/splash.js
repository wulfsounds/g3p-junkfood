var form = document.getElementsByTagName("form");
var inputName = document.getElementById("#name");
var inputUsername = document.getElementById("#username");
var inputEmail = document.getElementById("#email");
var inputPassword = document.getElementById("#password");
var submitBtn = document.getElementById("#btn");
var submissionResponse = document.getElementById("#response");

// Action to be performed on click store in named function
// function showResponse(event) {
//   // Prevent default action
//   event.preventDefault();
 
//   var response = " Thank you for your submission. ";
  
//   submissionResponse.textContent = response;
// }
  
// Add listener to submit element
// submitBtn.addEventListener("click", showResponse);
form.addEventListener("submitBtn", (event) => {
  event.preventDefault();
  alert("Thank you for logging in!");
});