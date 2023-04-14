import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Pages/MainPage",
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const MainPage = Template.bind({});
