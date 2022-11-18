import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SignIn from "templates/pages/SignIn";
import { PageFrameContainer } from "@core/templates/pageFrame/FrameDefault";

export default {
  title: "template/account/SignIn",
  component: SignIn,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = (args) => (
  <PageFrameContainer>
    <SignIn {...args} />
  </PageFrameContainer>
);

export const Default = Template.bind({});
Default.args = {};
