
// variables
const form = document.querySelector('.email-container');
const email = document.querySelector('.email');
const msg = document.querySelector('small');
const btn = document.querySelector('#btn');

// event listener on form
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

// event listener on btn
btn.addEventListener('click', () => {
  checkInputs();
});

// back to original state when you click on the input
email.addEventListener('click', () => {
  resetAll();
});


// function for input
function checkInputs() {
	const emailValue = email.value.trim();
  // value > to get value of input
  // trim > to remove white space from both side
	
	if(emailValue === '') {
    resetAll();
		setMessageFor(email, 'Whoops! It looks like you forgot to add your email');
    email.classList.add('redBorder');
	} else if (!isEmail(emailValue)) {
    resetAll();
		setMessageFor(email, 'Please provide a valid email address');
    email.classList.add('redBorder');
	} else {
    setMessageFor(email, 'Thank you for subscribing');
    msg.classList.remove('errorMsg');
    // as function "setMessageFor" add "errorMsg" in
    // all states, so we need to remove it when
    // we "accept" the email

    email.classList.add('accept');
    msg.classList.add('acceptMsg');
	}
};


// funtion for message on different states
function setMessageFor(input, message) {
	msg.classList.add('errorMsg');
  msg.innerText = message;
}

// email check requirements using Reg-ex
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function to reset all values to default
function resetAll() {
  msg.classList.remove('errorMsg');
  msg.classList.remove('acceptMsg');
  email.classList.remove('redBorder');
  email.classList.remove('accept');
}