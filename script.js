// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
  
    // Validate passwords
    function validatePassword() {
      if (password.value !== confirmPassword.value) {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        passwordError.style.display = "block";
        confirmPasswordError.style.display = "block";
        passwordError.textContent = "*Passwords do not match";
        confirmPasswordError.textContent = "*Passwords do not match";
        return false;
      } else {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        passwordError.style.display = "none";
        confirmPasswordError.style.display = "none";
        return true;
      }
    }
  
    // Prevent form submission if passwords do not match
    form.addEventListener("submit", function (event) {
      if (!validatePassword()) {
        event.preventDefault();
      }
    });
  
    // Add event listeners for password input fields
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validatePassword);
  });
  