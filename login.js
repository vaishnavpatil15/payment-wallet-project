// Elements
const formTitle = document.getElementById("form-title");
const authForm = document.getElementById("auth-form");
const submitBtn = document.getElementById("submit-btn");
const toggleForm = document.getElementById("toggle-form");
const confirmPasswordGroup = document.getElementById("confirm-password-group");

// State
let isLoginMode = true;

// Toggle form between Login and Sign Up
toggleForm.addEventListener("click", (e) => {
  e.preventDefault();
  isLoginMode = !isLoginMode;

  formTitle.textContent = isLoginMode ? "Login" : "Sign Up";
  submitBtn.textContent = isLoginMode ? "Login" : "Sign Up";
  toggleForm.textContent = isLoginMode
    ? "Don't have an account? Sign up here"
    : "Already have an account? Login here";

  confirmPasswordGroup.classList.toggle("hidden", isLoginMode);
});

// Handle form submission
authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  // Basic validation
  if (!email || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!isLoginMode && password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Simulated login/signup action
  if (isLoginMode) {
    console.log("Logging in with:", { email, password });
  } else {
    console.log("Signing up with:", { email, password });
  }

  alert(`${isLoginMode ? "Logged in" : "Signed up"} successfully!`);

  // Reset form
  authForm.reset();

  // Reset confirm password field visibility if switched back to login
  if (isLoginMode) {
    confirmPasswordGroup.classList.add("hidden");
  }
});
