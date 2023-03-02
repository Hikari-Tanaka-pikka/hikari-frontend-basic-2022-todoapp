import React from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue = "" }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.onblur = () => {
      onEditComplete(inputRef.current.value);
    };
    inputRef.current.onkeypress = (e) => {
      if (e.key === "Enter") {
        onEditComplete(inputRef.current.value);
      }
    };
  }, []);

  return (
    <>
      <StyledInput type="text" ref={inputRef} />
    </>
  );
};
export default Input;

const StyledInput = styled.input`
  width: 390px;
  ${TEXT.S};
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  border: none;
  border-radius: 2px;
  &:focus-visible {
    outline: none;
  }
`;
