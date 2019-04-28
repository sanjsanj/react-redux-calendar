import styled from "styled-components";

export const StyledCalendarContainer = styled.div`
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;

  > * {
    width: 14%;
  }
`;

export const StyledCalendarDayName = styled.p`
  color: ${props => props.theme.mainTextColor};
`;

export const StyledCalendarDayBox = styled.div`
  background: ${props =>
    props.disabled
      ? props.theme.disabledDayBackgroundColor
      : props.theme.dayBackgroundLinearGradient};

  box-shadow: ${props => (props.disabled ? "" : props.theme.boxShadowPassive)};
  cursor: ${props => (props.disabled ? "auto" : "pointer")};
  color: ${props => props.theme.mainTextColor};
  transition: all 0.3s ease-in-out;
  margin: 1px auto;
  padding: 5px;
  height: 80px;

  :hover {
    box-shadow: ${props => (props.disabled ? "" : props.theme.boxShadowActive)};
  }
`;
