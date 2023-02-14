import React from "react";
import check from "../../../assets/svg/check.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Checkbox = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Styledimg src={check} />
    </StyledButton>
  );
};
export default Checkbox;

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  border-radius: 2px;
  background: none;
  border: 2px ${COLOR.LIGHT_GRAY} solid;
  &:hover .Styledimg {
    opacity: 1;
  }
`;

const Styledimg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;
