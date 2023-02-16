import React from "react";
import { useRef, useEffect } from "react";

const Input = ({ onEditComplete, defaltValue }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = defaltValue;
    inputRef.current.focus();
    inputRef.current.onBlur = () => {
      onEditComplete(inputRef.current.value);
    };
    (inputRef.current.onkeypress = (e) => {
      if (e.key === "Enter") {
        onEditComplete(inputRef.current.value);
      }
    }),
      [];
  });

  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
};
export default Input;
