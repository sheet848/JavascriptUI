document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const firstNameError = document.getElementById('first-name-error');
    const lastNameError = document.getElementById('last-name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Validate first name
        if (firstNameInput.value.trim() === '') {
            firstNameError.textContent = 'First name is required';
            isValid = false;
        } else {
            firstNameError.textContent = '';
        }

        // Validate last name
        if (lastNameInput.value.trim() === '') {
            lastNameError.textContent = 'Last name is required';
            isValid = false;
        } else {
            lastNameError.textContent = '';
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
            emailError.textContent = 'Email is not valid';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
