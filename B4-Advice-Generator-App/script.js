
// variables

const small = document.querySelector('small');
const advice = document.getElementById('advice');
const dice = document.getElementById('dice-container');

// function to generate advice
async function generateAdvice() {

  // get 'response' from server

  // result of network request (HTTP request) we made using fetch API
  const res = await fetch('https://api.adviceslip.com/advice');

  // await > to pause the execution of code until promise
  // returned by 'res.json()' is resolved
  
  // parse > breaking a block of data into smaller pieces
  
  // read and parse the 'response' data as JSON into JS object
  // then assign JS object to 'data' variable
  const data = await res.json();

  // use data as per need
  // using template literals in small because some content is fixed
  small.innerText = `Advice #${data.slip.id}`;
  // directly use data in advice
  advice.innerText = data.slip.advice;
}

// get new advice on click
dice.addEventListener('click', () => {
  generateAdvice();
})