
// variables
const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const pwd = document.getElementById('pwd');
const btn = document.getElementById('btn');


// main function
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {

    // trim to remove the whitespaces
	const firstValue = first.value.trim();
	const lastValue = last.value.trim();
	const emailValue = email.value.trim();
	const pwdValue = pwd.value.trim();

    if(firstValue === '') {
        setErrorFor(first, 'First Name cannot be empty');
    } else {
        setSuccessFor(first);
    }

    if(lastValue === '') {
        setErrorFor(last, 'Last Name cannot be empty');
    } else {
        setSuccessFor(last);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be empty');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Looks like this is not an email');
    } else {
        setSuccessFor(email);
    }

    if(pwdValue === '') {
        setErrorFor(pwd, 'Password cannot be empty');
    } else if(pwdValue.length <= 5) {
        setErrorFor(pwd, 'Password is too short');
    } else {
        setSuccessFor(pwd);
    }
}

// famous pre-defined functions for our purpose
function setErrorFor(input, message) {
    const entries = input.parentElement.parentElement;
    const small = entries.querySelector('.errMsg');
    // remove class "success" if added previously
    entries.classList.remove('success');
    entries.classList.add('fail');
    small.innerText = message;
}

function setSuccessFor(input) {
    const entries = input.parentElement.parentElement;
    // remove class "fail" if added previously
    entries.classList.remove('fail');
    entries.classList.add('success');
}

// email check requirements using Reg-ex
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}