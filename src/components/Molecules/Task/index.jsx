import React from "react";
import { useState } from "react";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";
import styled from "styled-components";
import TEXT from "../../../variables/texts";
import COLOR from "../../../variables/color";

const Task = ({
  defaultIsEditing = false,
  onClick,
  defaultTaskName = "",
  onEditComplete,
}) => {
  const [taskName, setName] = useState(defaultTaskName);
  const [isEditing, setStatus] = useState(defaultIsEditing);
  const onEditButtonClick = () => {
    setStatus(true);
  };
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onClick} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input
          defaultValue={taskName}
          onEditComplete={(taskName) => {
            onEditComplete(taskName);
            setName(taskName);
            setStatus(false);
          }}
        />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <EditButton onClick={onEditButtonClick} />
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};
export default Task;

const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const StyledCheckboxWrapper = styled.div`
  margin-left: 10px;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
`;

const StyledTaskName = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  margin: 0;
  margin-right: 10px;
`;
