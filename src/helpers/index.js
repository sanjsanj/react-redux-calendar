import { reminders } from "../reducers/reminders";

/** Test helpers */
export const styledComponentSelector = className =>
  `[data-class="${className}"]`;

/** Reducer helpers */
export const updateObject = (prevObject, nextObject) => ({
  ...prevObject,
  ...nextObject,
});

export const updateArray = (prevArray, item) => [...prevArray, item];

/** Time helpers */
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

export const ensureTwoDigits = number => `0${number}`.slice(-2);

/** With-data helpers */
export const withReminders = (daysOfTheMonthArray, month, year, reminders) => {
  return daysOfTheMonthArray.map((day, index) => {
    if (!day) return day;

    const startOfDay = new Date(year, month, day.dayOfMonth).getTime();
    const endOfDay = new Date(year, month, day.dayOfMonth + 1).getTime();

    return updateObject(day, {
      reminders: reminders.filter(
        reminder =>
          reminder.dateTime >= startOfDay && reminder.dateTime <= endOfDay
      ),
    });
  });
};

/** Form helpers */
export const formSerialize = formElement => {
  const values = {};
  const inputs = formElement.elements;

  for (let i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
  }
  return values;
};

export const stringTimeToDateTime = time => new Date(time).getTime();
