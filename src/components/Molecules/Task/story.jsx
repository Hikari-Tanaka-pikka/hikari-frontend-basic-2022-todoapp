import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Task = Template.bind({});
Task.args = {
  onClick: () => console.log("task completed"),
  onEditComplete: (taskName) => console.log(`taskname changed ${taskName}`),
};
