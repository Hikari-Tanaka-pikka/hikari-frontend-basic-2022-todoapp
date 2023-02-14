import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";

const Input = () => {
  return <StyledText>This is example.</StyledText>;
};
export default Input;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.S}
`;
