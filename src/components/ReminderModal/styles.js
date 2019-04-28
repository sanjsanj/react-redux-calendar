import styled from "styled-components";

export const StyledModalWrapper = styled.section`
  background: ${props => props.theme.modalUnderlayBackground};
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
`;

export const StyledForm = styled.form`
  max-width: ${props => props.theme.maxWidth};
  color: ${props => props.theme.dayColor};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
  display: flex;
  margin: auto;
  height: 40%;
  width: 100%;

  > * {
    margin: 20px auto;
  }

  label {
    margin-right: 10px;
  }
`;
