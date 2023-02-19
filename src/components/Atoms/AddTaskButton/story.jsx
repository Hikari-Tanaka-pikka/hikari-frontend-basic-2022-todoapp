import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/AddTaskButton",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const AddTaskButton = Template.bind({});
AddTaskButton.args = {
  onClick: () => console.log("clicked"),
};
