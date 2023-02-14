import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Checkbox",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  onClick: () => console.log("clicked"),
};
