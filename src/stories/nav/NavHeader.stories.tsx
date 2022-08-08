import styled from "@emotion/styled";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavHeader from "@template/nav/NavHeader";
import * as React from "react";
import { SMixinFlexRow } from "styles/emotion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "template/nav/NavHeader",
  component: NavHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NavHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavHeader> = (args) => (
  <PageFrameNav className={args.opened ? "opened" : "closed"}>
    <NavHeader {...args} />
  </PageFrameNav>
);

export const Opened = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Opened.args = {
  opened: true,
};

export const Closed = Template.bind({});
Closed.args = {
  opened: false,
};

const PageFrameNav = styled.div`
  &.opened {
    width: 302px;
  }
  &.closed {
    width: 60px;
  }
`;
