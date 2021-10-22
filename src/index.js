const tipValue = document.querySelectorAll(".btn");
const billAmount = document.querySelector(".bill-btn");
const numberOfPeople = document.querySelector(".people-count-btn");
const customAmount = document.querySelector(".custom-btn");
const resetBtn = document.querySelector(".reset-btn");
const tipBtn_5 = document.querySelector(".btn-5");
const tipBtn_10 = document.querySelector(".btn-10");
const tipBtn_15 = document.querySelector(".btn-15");
const tipBtn_25 = document.querySelector(".btn-25");
const tipBtn_50 = document.querySelector(".btn-50");
const tipAmount = document.querySelector(".tip-amount");
const price = document.querySelector(".tip-amount");
const price2 = document.querySelector(".total-amount");

billAmount.addEventListener("input", inputtedAmount);
numberOfPeople.addEventListener("input", inputtedAmount);
customAmount.addEventListener("input", inputtedAmount);
resetBtn.addEventListener("click", reset);

tipValue.forEach((tip) => {
  tip.addEventListener("click", (e) => {
    e.preventDefault();

    tipHandler(parseFloat(e.target.value));
  });
});

const tipHandler = (value) => {
  tipValue.forEach((tip) => tip.classList.remove("selected"));
  if (value === 5) {
    customAmount.value = "";
    inputtedAmount(0.05);
    tipBtn_5.classList.add("selected");
  } else if (value === 10) {
    customAmount.value = "";
    inputtedAmount(0.1);
    tipBtn_10.classList.add("selected");
  } else if (value === 15) {
    customAmount.value = "";
    inputtedAmount(0.15);
    tipBtn_15.classList.add("selected");
  } else if (value === 25) {
    customAmount.value = "";
    inputtedAmount(0.25);
    tipBtn_25.classList.add("selected");
  } else if (value === 50) {
    customAmount.value = "";
    inputtedAmount(0.5);
    tipBtn_50.classList.add("selected");
  }
};

function validateFloat(el) {
  let reg = /^[0-9]*\.?[0-9]*$/;
  return el.match(reg);
}
function validateInt(el) {
  let reg = /^[0-9]*$/;
  return el.match(reg);
}

function validateInput() {
  if (billAmount.value.includes(",")) {
    billAmount.value = billAmount.value.replace(",", ".");
  }

  if (!validateFloat(billAmount.value)) {
    billAmount.value = billAmount.value.substring(
      0,
      billAmount.value.length - 1
    );
  }
  if (!validateInt(customAmount.value)) {
    customAmount.value = customAmount.value.substring(
      0,
      customAmount.value.length - 1
    );
  }
}

function inputtedAmount(value) {
  let tip = 0.15;
  let peopleValue = 1;
  let billValue = 0;
  let customTip = 0;

  let bill = parseFloat(billAmount.value);
  let people = parseFloat(numberOfPeople.value);
  let custom = parseFloat(customAmount.value) || 0;

  if (value > 0) {
    tip = value;
  }
  if (people > 1) {
    peopleValue = people;
  }
  if (bill > 0) {
    billValue = bill;
  }
  if (custom > 0) {
    customTip = custom / 100;
  }

  if (customTip > 0) {
    tipValue.forEach((tip) => tip.classList.remove("selected"));
    tipCalculator(billValue, peopleValue, customTip);
  } else {
    tipCalculator(billValue, peopleValue, tip);
  }
  validateInput();
}

function tipCalculator(bill, people, tip) {
  let totalTip = (bill * tip) / people;
  let resultTip = totalTip.toFixed(2);

  let tipPlusOne = tip + 1;
  let totalAmount = (bill * tipPlusOne) / people;
  let resultTotal = totalAmount.toFixed(2);

  price.textContent = `$${resultTip}`;
  price2.textContent = `$${resultTotal}`;
}

function reset() {
  tipValue.forEach((tip) => tip.classList.remove("selected"));
  tipBtn_15.classList.add("selected");
  billAmount.value = "";
  numberOfPeople.value = "";
  customAmount.value = "";
  price.textContent = `$00.00`;
  price2.textContent = `$00.00`;
}
