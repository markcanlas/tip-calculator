const tipValue = document.querySelectorAll(".btn");
const billAmount = document.querySelector(".bill-btn");
const numberOfPeople = document.querySelector(".people-count-btn");
const customTip = document.querySelector(".custom-btn");
const tipBtn_5 = document.querySelector(".btn-5");
const tipBtn_10 = document.querySelector(".btn-10");
const tipBtn_15 = document.querySelector(".btn-15");
const tipBtn_25 = document.querySelector(".btn-25");
const tipBtn_50 = document.querySelector(".btn-50");
const tipAmount = document.querySelector(".tip-amount");
const price = document.querySelector(".tip-amount");
const price2 = document.querySelector(".total-amount");

billAmount.addEventListener("change", calculateTipAmount);
numberOfPeople.addEventListener("change", calculateTipAmount);

tipValue.forEach((tip) => {
  tip.addEventListener("click", (e) => {
    e.preventDefault();

    tipHandler(parseFloat(e.target.value));
  });
});

const tipHandler = (value) => {
  tipValue.forEach((tip) => tip.classList.remove("selected"));
  if (value === 5) {
    calculateTipAmount(0.05);

    tipBtn_5.classList.add("selected");
  } else if (value === 10) {
    calculateTipAmount(0.1);

    tipBtn_10.classList.add("selected");
  } else if (value === 15) {
    calculateTipAmount(0.15);

    tipBtn_15.classList.add("selected");
  } else if (value === 25) {
    calculateTipAmount(0.25);

    tipBtn_25.classList.add("selected");
  } else if (value === 50) {
    calculateTipAmount(0.5);

    tipBtn_50.classList.add("selected");
  }
};

function calculateTipAmount(value) {
  let tipValue = 0.15;
  let peopleValue = 1;
  let billValue = 0;

  let bill = Number(billAmount.value);
  let people = Number(numberOfPeople.value);

  if (value > 0) {
    tipValue = value;
  }
  if (people > 1) {
    peopleValue = people;
  }
  if (bill > 0) {
    billValue = bill;
  }

  let totalTip = (billValue * tipValue) / peopleValue;
  let resultTip = totalTip.toFixed(2);

  let tipPlusOne = tipValue + 1;
  let totalAmount = (billValue * tipPlusOne) / peopleValue;
  let resultTotal = totalAmount.toFixed(2);

  price.textContent = `$${resultTip}`;
  price2.textContent = `$${resultTotal}`;
}
