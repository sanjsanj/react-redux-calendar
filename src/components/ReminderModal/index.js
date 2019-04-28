import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

import { toggleReminderModal } from "../../actions";

import "react-datepicker/dist/react-datepicker.css";
import { StyledModalWrapper, StyledForm } from "./styles";
import { StyledSubmitInput } from "../App/styles";

const _handleModalUnderlayClick = (e, toggleReminderModal) =>
  e.target.id === "reminder-modal-underlay" ? toggleReminderModal() : null;

export const ReminderModal = props => {
  const [selectedDateTime, setSelectedDateTime] = React.useState(Date.now());

  return (
    <StyledModalWrapper
      onClick={e => _handleModalUnderlayClick(e, props.toggleReminderModal)}
      id={"reminder-modal-underlay"}
    >
      <StyledForm onSubmit={e => e.preventDefault()}>
        <h2>Add a reminder</h2>

        <div>
          <span>Date:</span>{" "}
          <DatePicker
            dateFormat="yyyy MMMM d h:mm aa"
            onChange={t => setSelectedDateTime(t)}
            selected={selectedDateTime}
            timeIntervals={15}
            timeCaption="time"
            timeFormat="HH:mm"
            showTimeSelect
          />
        </div>

        <div>
          <label htmlFor={"reminder-text"}>Reminder: </label>
          <input
            name={"reminder-text"}
            id={"reminder-text"}
            maxLength={"30"}
            type={"text"}
          />
        </div>

        <div>
          Colour:
          <input type={"radio"} id={"red"} name={"color"} value={"red"} />
          <label htmlFor={"red"}>🔴 Red</label>
          <input type={"radio"} id={"green"} name={"color"} value={"green"} />
          <label htmlFor={"green"}>📗 Green</label>
          <input type={"radio"} id={"yellow"} name={"color"} value={"yellow"} />
          <label htmlFor={"yellow"}>💛 Yellow</label>
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
});

export default connect(
  undefined,
  mapDispatchToProps
)(ReminderModal);
