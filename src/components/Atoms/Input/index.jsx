import React from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = ({ onEditComplete, defaultValue }) => {
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
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  border: none;
  border-radius: 2px;
  &:focus-visible {
    outline: none;
  }
`;
