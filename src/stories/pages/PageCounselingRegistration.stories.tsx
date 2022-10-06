import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExampleRegistration from "@template/examples/ExampleRegistration";

export default {
  title: "template/pages/ExampleRegistration",
  component: ExampleRegistration,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ExampleRegistration>;

const Template: ComponentStory<typeof ExampleRegistration> = (args) => {
  return <ExampleRegistration {...args} />;
};

export const Default = Template.bind({});
