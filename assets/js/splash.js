var inputName = document.querySelector("#name");
var inputUsername = document.querySelector("#username");
var inputEmail = document.querySelector("#email");
var inputPassword = document.querySelector("#password");
var submitBtn = document.querySelector("#btn");
var submissionResponse = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = " Thank you for your submission. ";
  submissionResponse.textContent = response;
}
  
// Add listener to submit element
submitBtn.addEventListener("click", showResponse);