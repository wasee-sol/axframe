import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavHeader from "@template/nav/NavHeader";
import UserInfo from "../../@template/nav/UserInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "template/nav/UserInfo",
  component: UserInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UserInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserInfo> = (args) => <UserInfo {...args} />;

export const Opened = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Opened.args = {
  opened: true,
};
