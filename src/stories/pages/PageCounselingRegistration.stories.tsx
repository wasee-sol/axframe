import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormSet } from "@core/pages/FORM/FormSet";

export default {
  title: "template/pages/DetailView",
  component: FormSet,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FormSet>;

const Template: ComponentStory<typeof FormSet> = (args) => {
  return <FormSet {...args} />;
};

export const Default = Template.bind({});
