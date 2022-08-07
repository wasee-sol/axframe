import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavHeader from "@template/nav/NavHeader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "template/nav/NavHeader",
  component: NavHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NavHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavHeader> = (args) => <NavHeader {...args} />;

export const Opened = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Opened.args = {
  opened: true,
};

export const Colosed = Template.bind({});
Colosed.args = {
  opened: false,
};
