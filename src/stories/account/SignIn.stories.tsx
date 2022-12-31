import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Index from "pages/signin";
import { PageFrameContainer } from "@core/pageFrame/FrameDefault";

export default {
  title: "template/account/Index",
  component: Index,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => (
  <PageFrameContainer>
    <Index {...args} />
  </PageFrameContainer>
);

export const Default = Template.bind({});
Default.args = {};
