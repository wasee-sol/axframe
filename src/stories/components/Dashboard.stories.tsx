import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dashboard from "../../components/dashboard/Dashboard";

export default {
  title: "template/components/Dashboard",
  component: Dashboard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {};
