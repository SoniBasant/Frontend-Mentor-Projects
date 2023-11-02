
// About functionality of the project

// i/p > billAmt
// i/p > tip (after click, clicked one will have "active" class)
// i/p > person; as we input "person", +
// all "active" (reset btn) classes will active, we get o/p as below
// if, person is zero, all "err" classes will active (zero err, person input err)

// o/p > innerText for -
// tip per person = ((billAmt * (tip /100)) / peron);
// total per person = ((billAmt + (billAmt * (tip /100))) / person);

// reset btn > all "active" and "err" will be removed
// o/p become $0.00 for both tip and total


// variables from calculate card
const billAmt = document.getElementById('bill-input');
const fixTipPercent = document.querySelectorAll('.num');
const customTipPercent = document.querySelector('.custom');
const person = document.querySelector('.person-input');
const zero = document.querySelector('.zero');

// variables from display card
const tipAmt = document.getElementById('tip-per-person');
const totalAmt = document.getElementById('total-per-person');
const btn = document.getElementById('btn');

// forms > to reset input
const billInputArea = document.getElementById('input-area');
const personInputArea = document.getElementById('person-area');

// as forEach method is used for iterating through an
// array but DOES NOT return a value, so in o/p 
// we get fixTipValue as 'Nan' (Not-a-Number)
// to fix this, we need to store 'selectedFixTip' in
// a variable outside the loop
let selectedFixedTip = 0;

// fixed percentage
fixTipPercent.forEach((tips) => {
  tips.addEventListener('click', () => {
    // remove "active" class from previously "active"
    fixTipPercent.forEach((el) => el.classList.remove('active'));
    selectedFixedTip = parseInt(tips.getAttribute("data-value"));
    tips.classList.add('active');

  })
});

// person input
person.addEventListener('input', () => {
  const personValue = parseInt(person.value);
  
  // check if person is zero
  if(personValue === 0) {
    zero.classList.add('err');
    person.classList.add('err');
  } else {
    btn.classList.add('active');
    zero.classList.remove('err');
    person.classList.remove('err');
    calculation();
  }

})

// function for tip and total calculation
function calculation() {
  const billValue = parseFloat(billAmt.value);
  const customValue = parseFloat(customTipPercent.value);
  const personValue = parseInt(person.value);
  
  // clear old o/p
  tipAmt.innerText = '';
  totalAmt.innerText = '';

  if(customValue) {
    tipTotal(customValue);
  } else {
    tipTotal(selectedFixedTip);
  }

  function tipTotal(input) {
    // tip per person
    const tipCal = ((billValue * (input / 100)) / personValue);
    // total per person
    const totalCal = ((billValue + (billValue * (input / 100))) / personValue);
  
    // o/p update
    tipAmt.innerText = `$${tipCal.toFixed(2)}`;
    totalAmt.innerText = `$${totalCal.toFixed(2)}`;
  }
}

// reset button
btn.addEventListener('click', () => {
  billInputArea.reset();
  fixTipPercent.forEach((el) => el.classList.remove('active'));
  personInputArea.reset();
  customTipPercent.value = '';
  tipAmt.innerText = '$0.00';
  totalAmt.innerText = '$0.00';
  person.classList.remove('err');
  zero.classList.remove('err');
  btn.classList.remove('active');
})
