
// variable

const toggleInput = document.querySelector('#toggle');
const monthlyAmt = document.querySelectorAll('.amt.monthly');
const yearkyAmt = document.querySelectorAll('.amt.yearly');

// event listener on toggle button
toggleInput.addEventListener('change', () => {
  // loop through each ".amt.monthly" class
  monthlyAmt.forEach((month) => month.classList.toggle('checked'));

  // loop through each ".amt.yearly" class
  yearkyAmt.forEach((year) => year.classList.toggle('checked'));
})