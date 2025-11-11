document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    const fields = {
        name: document.querySelector(".name"),
        email: document.querySelector(".email"),
        passWord: document.querySelector(".pass"),
        rePassword: document.querySelector(".re-pass"),
    };

    const errorMessageClass = document.querySelector('.error-class');
    let errorMessage = '';

    function clearError() {
        errorMessage = '';
        errorMessageClass.classList.add('display-none');
        errorMessageClass.textContent = '';  // clear previous text
    }

    // ✅ Validate name
    function isValidName() {
        const name = fields.name.value.trim();
        if (name === '') {
            errorMessage = 'Name cannot be empty';
            return false;
        }
        return true;
    }

    // ✅ Validate email
    function isValidEmail() {
        const email = fields.email.value.trim();
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (email === '') {
            errorMessage = 'Email cannot be empty';
            return false;
        } else if (!emailPattern.test(email)) {
            errorMessage = 'Invalid email format';
            return false;
        }

        return true;
    }

    // ✅ Validate password and re-password
    function isValidPassword() {
        const pass = fields.passWord.value.trim();
        const rePass = fields.rePassword.value.trim();

        if (pass.length < 6) {
            errorMessage = 'Password must be at least 6 characters long';
            return false;
        } else if (pass !== rePass) {
            errorMessage = 'Passwords do not match';
            return false;
        }

        return true;
    }

    // ✅ Handle form submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clearError();
        form.reset();
    });
    
});
