import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { StyledAppTitle, defaultTheme, GlobalStyles } from "./styles";

import Calendar from "../Calendar";
import ReminderModal from "../ReminderModal";

export const App = props => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />

        <StyledAppTitle>
          <img src={"favicon.ico"} alt={"Logo"} />
          Calendar Component
        </StyledAppTitle>

        <Calendar />

        {props.showReminderModal && <ReminderModal />}
      </>
    </ThemeProvider>
  );
};

App.propTypes = { showReminderModal: PropTypes.bool.isRequired };

const mapStateToProps = ({ calendar }) => ({
  showReminderModal: calendar.showReminderModal,
});

export default connect(
  mapStateToProps,
  undefined
)(App);
