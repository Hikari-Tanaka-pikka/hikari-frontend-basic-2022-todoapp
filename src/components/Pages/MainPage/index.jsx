import React from "react";
import styled from "styled-components";
import TodoCard from "../../Organisms/TodoCard";
import COLOR from "../../../variables/color";
import FONT from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
BREAKPOINT;

const MainPage = () => {
  return (
    <StyledWrapper>
      <StyledMessage>S Text</StyledMessage>
      <StyledHeading>SIMPLE TODO APP</StyledHeading>
      <TodoCard />
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  background-color: ${COLOR.DEEP_BLUE_GRAY};
  position: relative;
`;

const StyledHeading = styled.p`
  color: ${COLOR.WHITE};
  ${TEXT.L};
  text-align: center;
  font-family: ${FONT.ROBOTO};
  margin: 60px 20px 20px 20px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.M};
  }
`;

const StyledMessage = styled.div`
  padding: 10px 20px;
  width: 400px;
  height: 40px;
  border-radius: 4px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.RED};
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 20px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
    top: 15px;
  }
`;
