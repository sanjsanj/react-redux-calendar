import React from "react";
import PropTypes from "prop-types";

import { ensureTwoDigits } from "../../helpers";

import { StyledCalendarDayBox } from "./styles";

export default function CalendarDayBox(props) {
  const _formatTime = dateTime =>
    ensureTwoDigits(`${new Date(dateTime).getHours()}`) +
    ":" +
    ensureTwoDigits(`${new Date(dateTime).getMinutes()}`);

  return (
    <StyledCalendarDayBox disabled={!props.day}>
      {props.day && (
        <>
          <p>{props.day.dayOfMonth}</p>

          <ol>
            {props.day.reminders.map((reminder, index) => (
              <li key={index}>
                {_formatTime(reminder.dateTime)} {reminder.text}
              </li>
            ))}
          </ol>
        </>
      )}
    </StyledCalendarDayBox>
  );
}

CalendarDayBox.propTypes = {
  day: PropTypes.shape({
    dayOfMonth: PropTypes.number.isRequired,
    reminders: PropTypes.array,
  }),
};
