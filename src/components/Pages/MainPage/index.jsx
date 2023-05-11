import React from "react";
import styled from "styled-components";
import TodoCard from "../../Organisms/TodoCard";
import COLOR from "../../../variables/color";
import FONT from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import Title from "../../Atoms/Title";

const MainPage = () => {
  return (
    <StyledWrapper>
      <StyledHeading>
        <Title />
      </StyledHeading>
      <TodoCard />
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  background-color: ${COLOR.DEEP_BLUE_GRAY};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.p`
  text-align: center;
  margin: 60px 20px 20px 20px;
`;
