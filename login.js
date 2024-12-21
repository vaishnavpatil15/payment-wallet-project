const formTitle = document.getElementById('form-title');
const authForm = document.getElementById('auth-form');
const submitBtn = document.getElementById('submit-btn');
const toggleForm = document.getElementById('toggle-form');
const confirmPasswordGroup = document.getElementById('confirm-password-group');

let isLoginMode = true;

toggleForm.addEventListener('click', (event) => {
    event.preventDefault();
    isLoginMode = !isLoginMode;

    if (isLoginMode) {
        formTitle.textContent = 'Login';
        submitBtn.textContent = 'Login';
        toggleForm.textContent = "Don't have an account? Sign up here";
        confirmPasswordGroup.classList.add('hidden');
    } else {
        formTitle.textContent = 'Sign Up';
        submitBtn.textContent = 'Sign Up';
        toggleForm.textContent = 'Already have an account? Login here';
        confirmPasswordGroup.classList.remove('hidden');
    }
});

authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!isLoginMode && password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (isLoginMode) {
        console.log('Logging in with:', { email, password });
    } else {
        console.log('Signing up with:', { email, password });
    }

    alert(`${isLoginMode ? 'Logged in' : 'Signed up'} successfully!`);
    authForm.reset();
});
