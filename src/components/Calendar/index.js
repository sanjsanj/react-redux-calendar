import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleReminderModal } from "../../actions";

import {
  dayNamesArray,
  getMonthName,
  getDaysForMonth,
  withReminders,
} from "../../helpers";

import CalendarDayBox from "../CalendarDayBox";

import { StyledButton } from "../App/styles";
import { StyledCalendarContainer, StyledCalendarDayName } from "./styles";

export function Calendar(props) {
  const styledDayNames = dayNamesArray.map((dayName, index) => (
    <StyledCalendarDayName key={index}>{dayName}</StyledCalendarDayName>
  ));

  const styledDayBoxes = props.daysOfTheMonth.map((day, index) => (
    <CalendarDayBox key={index} day={day} />
  ));

  return (
    <>
      <h2>
        {props.monthName} {props.selectedYear}
      </h2>

      <StyledButton
        onClick={props.toggleReminderModal}
        data-class={"btn-toggle-reminder-modal"}
      >
        Add reminder{" "}
        <span role={"img"} aria-label="Reminder icon">
          ⏰
        </span>
      </StyledButton>

      <StyledCalendarContainer>
        {styledDayNames}

        {styledDayBoxes}
      </StyledCalendarContainer>
    </>
  );
}

Calendar.propTypes = {
  toggleReminderModal: PropTypes.func.isRequired,
  daysOfTheMonth: PropTypes.array.isRequired,
  selectedYear: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
};

const mapStateToProps = ({ calendar, reminders }) => ({
  monthName: getMonthName(calendar.selectedMonth),
  selectedYear: calendar.selectedYear,
  daysOfTheMonth: withReminders(
    getDaysForMonth(calendar.selectedYear, calendar.selectedMonth),
    calendar.selectedMonth,
    calendar.selectedYear,
    reminders
  ),
});

const mapDispatchToProps = dispatch => ({
  toggleReminderModal: () => dispatch(toggleReminderModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
