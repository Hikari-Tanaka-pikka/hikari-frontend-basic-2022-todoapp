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
  onTaskComplete,
  onEditComplete,
  taskName,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditButtonClick = () => {
    setIsEditing(true);
  };
  const edit = (taskName) => {
    onEditComplete(taskName);
    setIsEditing(false);
  };
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input defaultValue={taskName} onEditComplete={edit} />
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
