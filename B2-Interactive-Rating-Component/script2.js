
// variables
// the place we are going to add rating
const rating = document.querySelector('.title2');

// call function, so that we can get rating
// as soon as page load
addRating();

// function to add rating in html page
function addRating() {
    // retrieve rating from session storage
    const ratingValue = sessionStorage.getItem('ratingGet');
    // add rating at the place we want using
    // template literals
    rating.innerHTML = `You selected ${ratingValue} out of 5`;
}