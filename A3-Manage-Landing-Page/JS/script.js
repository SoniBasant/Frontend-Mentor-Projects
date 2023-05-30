
// menu
// variables
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
// function on event
btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})

// email validation
// variables
const form = document.getElementById('form');
const email = document.getElementById('email');
const small = document.getElementById('errorMessage');
// function on event
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
// function
function checkInputs() {
	const emailValue = email.value.trim();
	
	if(emailValue === '') {
		setMessageFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setMessageFor(email, 'Please insert a valid email');
	} else {
        setMessageFor(email, 'Thank you for registering your email');
	}
}

function setMessageFor(input, message) {
	small.classList.add('show');
    small.innerText = message;
}

// email check requirements using Reg-ex
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// carousel for testimonial
// variables
const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelectorAll('.carousel-item');
const circles = document.querySelectorAll('.circle');

let currentIndex = 0;
// testimonial card
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  if (currentIndex < carouselItem.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}
// progress circles
function circleBG () {
	removeActive();
	circles[currentIndex].classList.add('show');
}
function removeActive() {
	circles.forEach((circle) => {
		circle.classList.remove('show')
	})
}

function cardCircle() {
	nextSlide();
	circleBG();
}
setInterval(cardCircle, 3500);
