import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavUserMenu from "@template/nav/NavUserMenu";

export default {
  title: "template/nav/NavUserMenu",
  component: NavUserMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NavUserMenu>;

const Template: ComponentStory<typeof NavUserMenu> = (args) => <NavUserMenu {...args} />;

export const Default = Template.bind({});
