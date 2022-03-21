// Global variables
var submission = document.getElementById("#btn");
var submissionResponse = document.querySelector("#response");


let showConfirmation = () => {
  // Get the data from specific element on the form.
  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");

  // This variable stores all the data.
  let data = "Welcome " + inputName.value + "." + " \r\n " + "Thanks for joining junkfood!" + " \r\n " + " We will reach out to you at " + inputEmail.value + ".";

  // Displays data in text
  submissionResponse.textContent = data;
};

// On click, it shows confirmation
submissionResponse.addEventListener("click", showConfirmation);













































// var form = document.getElementById(".form-group");
// var thankYouSection = document.getElementById("#confirmationModal");
// var submitBtn = document.querySelector("submit");
// var modalPopup = document.getElementById(".modal-thank-you");






// function validate(){
  
//   const inputName = document.querySelector("name");
//   const inputUsername = document.getElementById("username");
//   const inputEmail = document.querySelector("email");
//   const inputPassword = document.querySelector("password");
  
  
// }






// submitBtn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   form.classList.remove("active");
//   thankYouSection.classList.add("active");

//   thankYouSection();
// })





// // Displays question with choices, score addition, and countdown penalty.
// function thankYouSection() {
  

  


// }


