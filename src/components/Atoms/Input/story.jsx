import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Input",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Input = Template.bind({});
Input.args = {
  defaultValue: "defaultValue",
  onEditComplete: (value) => console.log(value)
}
