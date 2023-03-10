import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Input",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Input = Template.bind({});
Input.args = {
  onTaskComplete: () => console.log("task completed"),
};
