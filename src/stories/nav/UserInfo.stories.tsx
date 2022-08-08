import styled from "@emotion/styled";
import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserInfo from "@template/nav/UserInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "template/nav/UserInfo",
  component: UserInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    me: {
      uuid: "uuid",
      name: "Thomas Jang",
      email: "tom@axisj.com",
      jobTitle: "Software Engineer",
    },
  },
} as ComponentMeta<typeof UserInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserInfo> = (args) => (
  <PageFrameNav className={args.opened ? "opened" : "closed"}>
    <UserInfo {...args} />
  </PageFrameNav>
);
const PageFrameNav = styled.div`
  &.opened {
    width: 302px;
  }
  &.closed {
    width: 60px;
  }
`;

export const Opened = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Opened.args = {
  opened: true,
};

export const Closed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Closed.args = {
  opened: false,
};
