import React from "react";
import Button from "../components/button";

export default {
  title: "Button",
  component: Button,

  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md","lg"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const primary = Template.bind({});

primary.args = {
  children: "Hire Engineers",
  type: "secondary",
  size: "sm",
};
