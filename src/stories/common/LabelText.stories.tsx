import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LabelText from "@template/common/LabelText";

export default {
  title: "template/common/LabelText",
  component: LabelText,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LabelText>;

const Template: ComponentStory<typeof LabelText> = (args) => <LabelText {...args} />;

export const Opened = Template.bind({});
Opened.args = {
  label: "Label",
  children: "Text text",
};
