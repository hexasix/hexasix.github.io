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
/**
 * @param {String} type "day","month","year"
 * Cannot be other values
 */
const updateInvalidParagraph = (type)=>{
    //remove previous
    const existingInvalidWarningParagraph = document.querySelector(
      `div:has(>#${type}) .invalid-warning-text`
    );
    if (existingInvalidWarningParagraph) {
      existingInvalidWarningParagraph.remove();
    }
    //append new <p>
    const invalidWarningParagraph = document.createElement("p");
    const inputFlexbox = document.querySelector(`div:has(>#${type})`);
    invalidWarningParagraph.textContent = `Invalid ${type}`;
    invalidWarningParagraph.classList.add("invalid-warning-text");
    invalidWarningParagraph.style.display = "inline";
    inputFlexbox.appendChild(invalidWarningParagraph);
}
const validation = (day, month, year) => {
  const currentYear = new Date().getFullYear();
  //If the inputs are empty
  let flag = true;
  const invalidWarningParagraphs = document.querySelectorAll(".invalid-warning-text")
  invalidWarningParagraphs.forEach(invalidWarningParagraph => {
    invalidWarningParagraph.remove()
  })

  emptyWarningTexts.forEach((emptyWarningText) => {
    emptyWarningText.style.display = "none";
  });

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
    flag = false;
  }

  /**
   * If all required inputs exist
   * proceed field validation
   */
  if (month < 1 || month > 12) {
    updateInvalidParagraph("month")
    flag = false;
  }

  if (day < 1 || day > 31) {
    updateInvalidParagraph("day")
    flag = false;
  }


  if (year && (year > currentYear)) {
    updateInvalidParagraph("year")
    flag = false;
  }
  //------------------------------------------------------
  //If there is an error(flag===false), move down the button
  //------------------------------------------------------
  if(!flag){
    roundButton.style.top = "7.5rem";
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
