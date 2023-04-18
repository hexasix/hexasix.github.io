const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const roundButton = document.querySelector(".button");
const emptyWarningTexts = document.querySelectorAll(".empty-warning-text");
const timestampNow = new Date().getTime();
const validation = (day, month, year) => {
  const currentYear = new Date().getFullYear();
  const userInputYear = userInputDate.getFullYear();
  //If the inputs are empty
  let flag = true;
  if (!day) {
    emptyWarningTexts[0].style.display = "inline";
    flag = false;
  }
  if (!month) {
    emptyWarningTexts[1].style.display = "inline";
    flag = false;
  }
  if (!year) {
    emptyWarningTexts[2].style.display = "inline";
    flag = false;
  }
  if (!day || !month || !day) {
    roundButton.style.top = "7.5rem";
    flag = false;
  }
  if (month < 1 || month > 12) {
    const invalidWarningParagraph = document.createElement("p");
    const monthInputFlexbox = document.querySelector("div:has(>#month)");
    invalidWarningParagraph.textContent = "Invalid Month";
    // invalidWarningParagraph.style.color = "hsl(var(--primary-color-light-red))"
    invalidWarningParagraph.classList.add("empty-warning-text");
    monthInputFlexbox.appendChild(invalidWarningParagraph);
    flag = false;
  }
  if (day < 1 || day > 31) {
    const invalidWarningParagraph = document.createElement("p");
    const dayInputFlexbox = document.querySelector("div:has(>#day)");
    invalidWarningParagraph.textContent = "Invalid Day";
    invalidWarningParagraph.classList.add("empty-warning-text");
    dayInputFlexbox.appendChild(invalidWarningParagraph);
    flag = false;
  }
  if (userInputYear > currentYear) {
    const invalidWarningParagraph = document.createElement("p");
    const yearInputFlexbox = document.querySelector("div:has(>#year)");
    invalidWarningParagraph.textContent = "Invalid Year";
    invalidWarningParagraph.classList.add("empty-warning-text");
    yearInputFlexbox.appendChild(invalidWarningParagraph);
    flag = false;
  }
  return flag;
};
const calculateDateDiff = (userInputDate) => {
  let now = moment(Date.now());
  const diff = moment.preciseDiff(now, userInputDate, true);
  const { days, months, years } = diff;
  const result = { days, months, years };
  // console.log(diff)
  return result;
};
function addSpaceBetweenDigits(numStr) {
  return numStr.split("").join(" ");
}

/**
 * These are the value that users put
 */
let day;
let month;
let year;
let userInputDate;
// const result = {
//   days: null,
//   months: null,
//   years: null,
// };
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
  let result = {};
  const yearDiffDisplaySpan = document.querySelector(".year .number");
  const monthDiffDisplaySpan = document.querySelector(".month .number");
  const dayDiffDisplaySpan = document.querySelector(".day .number");
  let yearsStrWithSpace;
  let monthsStrWithSpace;
  let daysStrWithSpace;
  event.stopPropagation();
  if (validation(day, month, year)) {
    result = calculateDateDiff(userInputDate);
  }

  const { years, months, days } = result;
  yearsStrWithSpace = addSpaceBetweenDigits(years.toString());
  daysStrWithSpace = addSpaceBetweenDigits(days.toString());
  monthsStrWithSpace = addSpaceBetweenDigits(months.toString());
  //change DOM
  yearDiffDisplaySpan.textContent = yearsStrWithSpace;
  monthDiffDisplaySpan.textContent = monthsStrWithSpace;
  dayDiffDisplaySpan.textContent = daysStrWithSpace;
};
