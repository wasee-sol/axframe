import styled from "@emotion/styled";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserInfo from "@template/nav/UserInfo";
import * as React from "react";

export default {
  title: "template/nav/UserInfo",
  component: UserInfo,
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

const Template: ComponentStory<typeof UserInfo> = (args) => (
  <PageFrameNav className={args.sideMenuOpened ? "opened" : "closed"}>
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
Opened.args = {
  sideMenuOpened: true,
};

export const Closed = Template.bind({});
Closed.args = {
  sideMenuOpened: false,
};
