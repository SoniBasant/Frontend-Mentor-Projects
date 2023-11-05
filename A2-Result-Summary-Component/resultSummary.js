
// fetch data from data.json file
fetch('data.json')
  // convert JSON data into JavaScript object
  // and hold it in variable "res"
  .then((res) => res.json())
  // use that data
  .then((data) => {
    // loop for each element of object
    // also include index for our purpose
    data.forEach((el, index) => {
      // bring an element from HTML using querySelector
      const resultSummary = document.querySelector('.summary');
        // create a div to keep HTML template
        const myDiv = document.createElement('div');
        // create HTML template as per design
        // it was originally created in HTML
        myDiv.innerHTML =
        `
        <section class="rows category${index + 1}">
          <section class="title">

            <img src="${el.icon}" alt="${el.category} Icon">
            <p>
              ${el.category}
            </p>
          </section>

          <section class="marks">

            <strong>
              ${el.score}
            </strong>
            <p>
              / 100 
            </p>
          </section>

          <section class="quaCircle circle1"></section>
          <section class="quaCircle circle2"></section>
          <section class="quaCircle circle3"></section>
          <section class="quaCircle circle4"></section>
        </section>
        `;
        // add div to the element we bring from HTML
        resultSummary.appendChild(myDiv);
      })
})
// for all kind of failure in fetching data
.catch((err) => {
  console.log('Error in fetching JSON data:', err);
});
 