export const dayNamesArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const _monthNamesArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonthName = currentMonthIndex =>
  _monthNamesArray[currentMonthIndex];

const _getLeadingDaysArray = daysArray =>
  Array.apply(undefined, Array(daysArray[0].dayNameIndex));

const _getTrailingDaysArray = daysArray => {
  const lastDay = daysArray[daysArray.length - 1];
  const numOfDays = Math.abs(lastDay.dayNameIndex - 6);

  return Array.apply(undefined, Array(numOfDays));
};

const _getDayNameIndex = (year, month, day) =>
  new Date(`${year}-${month + 1}-${day + 1}`).getDay();

export const getDaysForMonth = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = Array.apply(undefined, Array(daysInMonth)).map(
    (day, index) => ({
      dayNameIndex: _getDayNameIndex(year, month, index),
      dayOfMonth: index + 1,
    })
  );

  return [
    ..._getLeadingDaysArray(daysArray),
    ...daysArray,
    ..._getTrailingDaysArray(daysArray),
  ];
};

export const styledComponentSelector = className =>
  `[data-class="${className}"]`;

export const updateObject = (prevObject, nextObject) => ({
  ...prevObject,
  ...nextObject,
});

export const updateArray = (prevArray, item) => [...prevArray, item];

export const formSerialize = formElement => {
  const values = {};
  const inputs = formElement.elements;

  for (let i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
  }
  return values;
};

export const stringTimeToDateTime = time => new Date(time).getTime();
