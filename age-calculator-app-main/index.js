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
    userInputDate = new Date(year, month, day);
    console.log("userInputDate", userInputDate);
  }
};
monthInput.oninput = (event) => {
  month = parseInt(event.target.value);
  if (day && month && year) {
    userInputDate = new Date(year, month, day);
    console.log("userInputDate", userInputDate);
  }
};
yearInput.oninput = (event) => {
  year = parseInt(event.target.value);
  if (day && month && year) {
    userInputDate = new Date(year, month, day);
    console.log("userInputDate", userInputDate);
  }
};

roundButton.onclick = (event) => {
  event.stopPropagation();
  const currentYear = new Date().getFullYear();
  const userInputYear = userInputDate.getFullYear();
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
  if (month < 1 || month > 12) {
    const invalidWarningParagraph = document.createElement("p");
    const monthInputFlexbox = document.querySelector("div:has(>#month)");
    invalidWarningParagraph.textContent = "Invalid Month";
    // invalidWarningParagraph.style.color = "hsl(var(--primary-color-light-red))"
    invalidWarningParagraph.classList.add("empty-warning-text");
    monthInputFlexbox.appendChild(invalidWarningParagraph);
  }
  if (day < 1 || day > 31) {
    const invalidWarningParagraph = document.createElement("p");
    const dayInputFlexbox = document.querySelector("div:has(>#day)");
    invalidWarningParagraph.textContent = "Invalid Day";
    invalidWarningParagraph.classList.add("empty-warning-text");
    dayInputFlexbox.appendChild(invalidWarningParagraph);
  }
  if (userInputYear>currentYear) {
    const invalidWarningParagraph = document.createElement("p");
    const yearInputFlexbox = document.querySelector("div:has(>#year)");
    invalidWarningParagraph.textContent = "Invalid Year";
    invalidWarningParagraph.classList.add("empty-warning-text");
    yearInputFlexbox.appendChild(invalidWarningParagraph);
  }
};
