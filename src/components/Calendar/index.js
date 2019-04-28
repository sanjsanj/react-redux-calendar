import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { dayNamesArray, getMonthName, getDaysForMonth } from "../../helpers";

import CalendarDayBox from "../CalendarDayBox";

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

      <StyledCalendarContainer>
        {styledDayNames}

        {styledDayBoxes}
      </StyledCalendarContainer>
    </>
  );
}

Calendar.propTypes = {
  daysOfTheMonth: PropTypes.array.isRequired,
  selectedYear: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
};

const mapStateToProps = ({ calendar }) => ({
  monthName: getMonthName(calendar.selectedMonth),
  selectedYear: calendar.selectedYear,
  daysOfTheMonth: getDaysForMonth(
    calendar.selectedYear,
    calendar.selectedMonth
  ),
});

export default connect(
  mapStateToProps,
  undefined
)(Calendar);
