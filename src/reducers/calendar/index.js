const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();

export const calendarInitialState = {
  selectedMonth: currentMonth,
  selectedYear: currentYear,
};

export const calendar = (state = calendarInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
