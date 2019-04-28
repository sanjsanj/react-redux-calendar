import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

import { toggleReminderModal, addReminder } from "../../actions";

import { formSerialize, stringTimeToDateTime } from "../../helpers";

import "react-datepicker/dist/react-datepicker.css";
import { StyledModalWrapper, StyledForm } from "./styles";
import { StyledSubmitInput } from "../App/styles";

export const ReminderModal = props => {
  const [selectedDateTime, setSelectedDateTime] = React.useState(Date.now());

  const _handleModalUnderlayClick = e =>
    e.target.id === "reminder-modal-underlay"
      ? props.toggleReminderModal()
      : null;

  const _handleSubmit = e => {
    e.preventDefault();

    const dateTime = stringTimeToDateTime(selectedDateTime);
    const text = formSerialize(e.target)["reminder-text"];
    const color = formSerialize(e.target)["color"];

    if (!text || !dateTime) return;

    props.addReminder({ text, dateTime, color });
    props.toggleReminderModal();
  };

  return (
    <StyledModalWrapper
      onClick={_handleModalUnderlayClick}
      id={"reminder-modal-underlay"}
    >
      <StyledForm onSubmit={_handleSubmit}>
        <h2>Add a reminder</h2>

        <div>
          <span>Date:</span>{" "}
          <DatePicker
            onChange={t => setSelectedDateTime(t)}
            dateFormat="yyyy MMMM d h:mm aa"
            selected={selectedDateTime}
            timeIntervals={15}
            timeCaption="time"
            timeFormat="HH:mm"
            showTimeSelect
          />
        </div>

        <div>
          <label htmlFor={"reminder-text"}>Reminder:</label>
          <input
            name={"reminder-text"}
            id={"reminder-text"}
            maxLength={"30"}
            type={"text"}
          />
        </div>

        <div>
          Colour:
          <label htmlFor={"red"}>
            <input type={"radio"} name={"color"} value={"red"} />
            <span role={"img"} aria-label={"red"}>
              🔴
            </span>{" "}
            Red
          </label>
          <label htmlFor={"green"}>
            <input type={"radio"} name={"color"} value={"green"} />
            <span role={"img"} aria-label={"green"}>
              📗
            </span>{" "}
            Green
          </label>
          <label htmlFor={"yellow"}>
            <input type={"radio"} name={"color"} value={"yellow"} />
            <span role={"img"} aria-label={"yellow"}>
              💛
            </span>{" "}
            Yellow
          </label>
        </div>

        <StyledSubmitInput type="submit" value="Add" />
      </StyledForm>
    </StyledModalWrapper>
  );
};

ReminderModal.propTypes = {
  toggleReminderModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggleReminderModal: () => dispatch(toggleReminderModal()),
  addReminder: reminder => dispatch(addReminder(reminder)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(ReminderModal);
