var form = document.getElementById(".form-container");
var thankYouSection = document.getElementById("#confirmationModal");
var submitBtn = document.querySelector("submit");


const inputName = document.querySelector("name");
const inputUsername = document.querySelector("username");
const inputEmail = document.querySelector("email");
const inputPassword = document.querySelector("password");



submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (isFormValid){
    form.removal();
    thankYouSection.classList.remove("hidden");
  }
})

inputName.addEventListener('input', () => {
  validateInputs
})


submitBtn.addEventListener("submit", function() {

  form.classList.remove("active");
  thankYouSection.classList.add("active");

  thankYouSection.textContent = response;

  validateInputs();
})






