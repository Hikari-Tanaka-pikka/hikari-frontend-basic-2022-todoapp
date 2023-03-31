import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Alert",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  alertMessage: "sample",
  isActive: true,
};
