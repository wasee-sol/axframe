import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ExampleFormSet } from "@core/templates/exampleForm/ExampleFormSet";

export default {
  title: "template/pages/ExampleFormSet",
  component: ExampleFormSet,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ExampleFormSet>;

const Template: ComponentStory<typeof ExampleFormSet> = (args) => {
  return <ExampleFormSet {...args} />;
};

export const Default = Template.bind({});
