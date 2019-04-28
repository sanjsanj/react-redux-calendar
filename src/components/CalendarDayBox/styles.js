import styled from "styled-components";

export const StyledCalendarDayBox = styled.div`
  background: ${props =>
    props.disabled
      ? props.theme.disabledDayBackgroundColor
      : props.theme.dayBackgroundLinearGradient};

  cursor: ${props => (props.disabled ? "auto" : "pointer")};
  color: ${props => props.theme.mainTextColor};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  margin: 1px auto;
  padding: 5px;
  height: 80px;

  :hover {
    box-shadow: ${props => (props.disabled ? "" : "0px 3px 9px #000000")};
  }

  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0 auto 5px;
  }

  li {
    margin: 0 auto 5px;
    font-size: 11px;
  }
`;
