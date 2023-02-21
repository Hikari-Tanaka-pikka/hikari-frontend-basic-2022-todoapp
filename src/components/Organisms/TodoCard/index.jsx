import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const [taskList, setTask] = useState([]);
  const onClick = () => {
    const newTask = {
      name: "",
      initializing: true,
    };
    setTask(taskList.concat(newTask));
  };
  const onTaskNameChange = (value, index) => {
    if (value === "") {
      const notask = taskList;
      notask.splice(index, 1);
      setTask(notask);
    } else {
      const addTask = taskList;
      addTask[index].name = value;
      setTask(addTask);
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onClick} />
      <StyledTaskList>
        <ol>
          {taskList.map((task, index) => (
            <Task
              key={index}
              onTaskNameChange={(value) => onTaskNameChange(value, index)}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          ))}
        </ol>
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledTaskList = styled.div`
  width: 100%;
`;
