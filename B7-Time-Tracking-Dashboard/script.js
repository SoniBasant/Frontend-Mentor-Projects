
// variables
const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

const li = document.querySelectorAll('.duration li');
const cardContainer = document.querySelector('.card-container');

// fetch data from data.json file
fetch('data.json')
  // convert JSON data into JavaScript object
  // and hold it in variable "res"
  .then((res) => res.json())
  // use that data
  .then((data) => {
    // call update card-info function for weekly
    // as weekly is primary display
    updateCards(data, 'weekly');
    // Add 'active' class to the weekly button
    weeklyBtn.classList.add('active');

    // add event listener to duration of daily, weekly and monthly
    dailyBtn.addEventListener('click', () => updateAndToggleClass(data, 'daily', dailyBtn));
    weeklyBtn.addEventListener('click', () => updateAndToggleClass(data, 'weekly', weeklyBtn));
    monthlyBtn.addEventListener('click', () => updateAndToggleClass(data, 'monthly', monthlyBtn));
})
// for all kind of failure in fetching data
.catch((err) => {
  console.log('Error in fetching JSON data:', err);
});

// function to call updateCards and add/remove active class
function updateAndToggleClass(data, timeframe, button) {
  // remove active class from all li
  li.forEach((el) => el.classList.remove('active'));
  // add active class on clicked one
  button.classList.add('active');
  // call updateCards function
  updateCards(data, timeframe);
}

function updateCards(data, timeframe) {
  // first clear previous data
  cardContainer.innerHTML = '';
  // loop for each element of object
  // also include index for our purpose
  data.forEach((el, index) => {
    // create a div to keep HTML template
    const myDiv = document.createElement('div');
    // create HTML template as per design
    // it was originally created in HTML
    myDiv.innerHTML =
    `
    <div class="cards card${index + 1}">
      <div class="card-info">
        <div class="activity">
          <p>${el.title}</p>
          <a href="#">...</a>
        </div>

        <div class="hrs">
          <p>${el.timeframes[timeframe].current}hrs</p>
          <p>${timeframe === 'weekly' ? 'Last Week' : timeframe === 'monthly' ? 'Last Month' : 'Yesterday'} - ${el.timeframes[timeframe].previous}hrs</p>
        </div>
      </div>
    </div>
    `;
    // above in last p> made last time dynamic using ternary operator
    // add div to the element we bring from HTML
    cardContainer.appendChild(myDiv);
  });
}
