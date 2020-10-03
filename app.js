const registerForm = document.getElementById('register-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

registerForm.addEventListener('submit', e => {

    e.preventDefault();
    checkInputs();

});

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Please enter your Username');
    } else {
        setSuccesFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter your Email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email not Valid');
    } else {
        setSuccesFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Please enter your Password');
    } else {
        setSuccesFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Please enter your Password');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccesFor(password2);
    }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.remove('succes');
    formControl.classList.add('error');
    small.innerText = message;
};

function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('succes');
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};