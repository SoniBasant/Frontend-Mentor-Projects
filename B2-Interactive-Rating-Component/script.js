
// variables

const btn = document.querySelector('.btn');
const nums = document.querySelectorAll('.num');

// loop for each number
nums.forEach((num) => {

    // event listener on number
    num.addEventListener('click', () => {
        // get value of the rating clicked
        const ratingGet = num.getAttribute('data-value');
        // event listener on submit btn
        btn.addEventListener('click', () => {
            // add data in session storage
            sessionStorage.setItem('ratingGet', ratingGet);
            // got to the "Thank you" html page
            window.location.href = 'index2.html';
        });
    })
})
