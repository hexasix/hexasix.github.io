const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const roundButton = document.querySelector(".button");
const emptyWarningTexts = document.querySelectorAll(".empty-warning-text");
const timestampNow = new Date().getTime();
/**
 * These are the value that users put
 */
let day;
let month;
let year;
let userInputDate;

const validation = (day, month, year) => {
  const currentYear = new Date().getFullYear();
  let userInputYear;
  //If the inputs are empty
  let flag = true;

  if (!day) {
    emptyWarningTexts[0].style.display = "inline";
    flag = false;
  }
  else{
    emptyWarningTexts[0].style.display = "none";
  }

  if (!month) {
    emptyWarningTexts[1].style.display = "inline";
    flag = false;
  }
  else{
    emptyWarningTexts[1].style.display = "none";
  }

  if (!year) {
    emptyWarningTexts[2].style.display = "inline";
    flag = false;
  }
  else{
    emptyWarningTexts[2].style.display = "none";
  }

  if (!day || !month || !day) {
    roundButton.style.top = "7.5rem";
    flag = false;
  } else {
    emptyWarningTexts.forEach((emptyWarningText) => {
      emptyWarningText.style.display = "none";
    });
  }

  /**
   * If all required inputs exist
   * proceed field validation
   */
  if (month < 1 || month > 12) {
    const invalidWarningParagraph = document.createElement("p");
    const existingInvalidWarningParagraph = document.querySelector(
      "div:has(>#month) .invalid-warning-text"
    );
    // console.log(existingInvalidWarningParagraph)
    if (existingInvalidWarningParagraph) {
      existingInvalidWarningParagraph.remove();
    }

    const monthInputFlexbox = document.querySelector("div:has(>#month)");
    invalidWarningParagraph.textContent = "Invalid Month";
    invalidWarningParagraph.classList.add("invalid-warning-text");
    invalidWarningParagraph.style.display = "inline";
    monthInputFlexbox.appendChild(invalidWarningParagraph);
    flag = false;
  }

  if (day < 1 || day > 31) {
    const invalidWarningParagraph = document.createElement("p");
    const dayInputFlexbox = document.querySelector("div:has(>#day)");
    invalidWarningParagraph.textContent = "Invalid Day";
    invalidWarningParagraph.classList.add("empty-warning-text");
    invalidWarningParagraph.style.display = "inline";
    dayInputFlexbox.appendChild(invalidWarningParagraph);
    flag = false;
  }

  if (year && month && day) {
    userInputYear = userInputDate.getFullYear();
  }
  if (userInputYear > currentYear) {
    const invalidWarningParagraph = document.createElement("p");
    const yearInputFlexbox = document.querySelector("div:has(>#year)");
    invalidWarningParagraph.textContent = "Invalid Year";
    invalidWarningParagraph.classList.add("empty-warning-text");
    invalidWarningParagraph.style.display = "inline";
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
  if (!validation(day, month, year)) {
    return;
  }
  let result = {};
  const yearDiffDisplaySpan = document.querySelector(".year .number");
  const monthDiffDisplaySpan = document.querySelector(".month .number");
  const dayDiffDisplaySpan = document.querySelector(".day .number");
  let yearsStrWithSpace;
  let monthsStrWithSpace;
  let daysStrWithSpace;
  event.stopPropagation();
  result = calculateDateDiff(userInputDate);
  const { years, months, days } = result;
  yearsStrWithSpace = addSpaceBetweenDigits(years.toString());
  daysStrWithSpace = addSpaceBetweenDigits(days.toString());
  monthsStrWithSpace = addSpaceBetweenDigits(months.toString());
  //change DOM
  yearDiffDisplaySpan.textContent = yearsStrWithSpace;
  monthDiffDisplaySpan.textContent = monthsStrWithSpace;
  dayDiffDisplaySpan.textContent = daysStrWithSpace;
};
