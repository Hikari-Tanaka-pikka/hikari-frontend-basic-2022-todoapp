import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import BREAKPOINT from "../../../variables/breakpoint";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const AlertHandlerContext = useAlertHandlerContext();
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
      AlertHandlerContext.setAlert("タスクの名前が設定されていません");
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
  width: 100%;
`;
