import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import App from "pages/signIn/App";
import { PageFrameContainer } from "@core/pageFrame/FrameDefault";

export default {
  title: "template/account/App",
  component: App,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => (
  <PageFrameContainer>
    <App {...args} />
  </PageFrameContainer>
);

export const Default = Template.bind({});
Default.args = {};
