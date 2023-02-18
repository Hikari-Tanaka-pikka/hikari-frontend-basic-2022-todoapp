import React from "react";
import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledShadow />
      <StyledImg src={plus} />
      <StyledText>タスクを追加</StyledText>
    </StyledButton>
  );
};
export default EditButton;

const StyledShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 105%;
  height: 110%;
  padding: 2px 6px;
  border-radius: 20px;
  background-color: ${COLOR.GREEN};
  transition: 0.2s;
`;

const StyledButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 126px;
  height: 24px;
  background: none;
  padding-top: 3px;
  padding-right: 0;
  & > ${StyledShadow} {
    opacity: 0;
  }
  &:hover {
    & > ${StyledShadow} {
      opacity: 0.2;
    }
  }
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledText = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  margin-left: 10px;
  border: none;
  color: ${COLOR.GREEN};
  ${TEXT.S}
`;
