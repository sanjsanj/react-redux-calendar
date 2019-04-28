import React from "react";
import PropTypes from "prop-types";

import { StyledCalendarDayBox } from "./styles";

export default function CalendarDayBox(props) {
  return (
    <StyledCalendarDayBox disabled={!props.day}>
      {props.day && props.day.dayOfMonth}
    </StyledCalendarDayBox>
  );
}

CalendarDayBox.propTypes = {
  day: PropTypes.shape({ dayOfMonth: PropTypes.number.isRequired }),
};
