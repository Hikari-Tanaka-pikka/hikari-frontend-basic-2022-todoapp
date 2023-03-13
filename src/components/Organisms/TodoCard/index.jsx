import React from "react";
import { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const addNewTask = () => {
    const newTask = {
      name: "",
      initializing: true,
    };
    setTaskList(taskList.concat(newTask));
  };
  const taskNameChange = (value, index) => {
    if (value === "") {
      const notask = [...taskList];
      notask.splice(index, 1);
      setTaskList(notask);
    } else {
      const addTask = [...taskList];
      addTask[index].name = value;
      setTaskList(addTask);
    }
  };
  const onTaskComplete = (index) => {
    const completed = [...taskList];
    completed.splice(index, 1);
    setTaskList(completed);
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={addNewTask} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onEditComplete={(value) => taskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
            onTaskComplete={onTaskComplete}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  width: 500px;
  background-color: ${COLOR.LIGHT_BLACK};
  padding: 24px 32px;
  margin: 0 auto;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
  }
`;

const StyledTaskList = styled.div`
  margin-top: 14px;
  width: 100%;
`;
