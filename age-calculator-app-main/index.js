const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const roundButton = document.querySelector(".button");
const emptyWarningTexts = document.querySelectorAll(".empty-warning-text");
const timestampNow = new Date().getTime();
console.log(emptyWarningTexts);
/**
 * These are the value that users put
 */
let day;
let month;
let year;
let userInputDate;
/**
 * when there is an input,
 * update the variables(day, month, year)  */
dayInput.oninput = (event) => {
  day = parseInt(event.target.value);
  if (day && month && year) {
    userInputDate = new Date(year, month, day).getTime();
    console.log("userInputDate", userInputDate);
  }
};
monthInput.oninput = (event) => {
  month = parseInt(event.target.value);
  if (day && month && year) {
    userInputDate = new Date(year, month, day).getTime();
    console.log("userInputDate", userInputDate);
  }
};
yearInput.oninput = (event) => {
  year = parseInt(event.target.value);
  if (day && month && year) {
    userInputDate = new Date(year, month, day).getTime();
    console.log("userInputDate", userInputDate);
  }
};

roundButton.onclick = (event) => {
  event.stopPropagation();
  //If the inputs are empty
  if (!day) {
    emptyWarningTexts[0].style.display = "inline";
  }
  if (!month) {
    emptyWarningTexts[1].style.display = "inline";
  }
  if (!year) {
    emptyWarningTexts[2].style.display = "inline";
  }
  if (!day || !month || !day) {
    roundButton.style.top = "7.5rem";
  }
};
