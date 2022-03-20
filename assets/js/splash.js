var form = document.getElementById(".form-group");
var thankYouSection = document.getElementById("#confirmationModal");
var submitBtn = document.querySelector("submit");
var modalPopup = document.getElementById(".modal-thank-you");


const inputName = document.querySelector("name");
const inputUsername = document.querySelector("username");
const inputEmail = document.querySelector("email");
const inputPassword = document.querySelector("password");



submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.remove("active");
  thankYouSection.classList.add("active");

  thankYouSection();
})





// Displays question with choices, score addition, and countdown penalty.
function thankYouSection() {
  

  


}


