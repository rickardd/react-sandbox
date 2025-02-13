import { useState } from "react";
import styled, { css } from "styled-components";

const StyledH1 = styled.h1`
  color: red;
  font-size: 16px;
`;

const StyledButton = styled.button`
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: pink;

  ${(props) =>
    props.red &&
    css`
      background-color: red;
    `}

  ${(props) =>
    props.yellow &&
    css`
      background-color: yellow;
    `}


  &:hover {
    background-color: ${(props) => (props.yellow ? "red" : "green")};
  }
`;

// Inherits styledButton
const StyledButtonActive = styled(StyledButton)`
  background-color: ${(props) => (props.isActive ? "green" : "red")};
  color: ${(props) => (props.isActive ? "white" : "black")};
`;

export const StyledComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div style={{ padding: "20px" }}>
      <StyledH1>Hello, Styled-Components!</StyledH1>
      <StyledButton>Default</StyledButton>
      <StyledButton red>Click Me</StyledButton>
      <StyledButton yellow>Click Me</StyledButton>
      <StyledButtonActive isActive={isActive} onClick={toggleActive}>
        {isActive ? "Active" : "Inactive"}
      </StyledButtonActive>
    </div>
  );
};
