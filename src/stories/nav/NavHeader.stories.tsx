import styled from "@emotion/styled";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavHeader from "components/nav/NavHeader";
import * as React from "react";

export default {
  title: "template/nav/NavHeader",
  component: NavHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NavHeader>;

const Template: ComponentStory<typeof NavHeader> = (args) => (
  <PageFrameNav className={args.sideMenuOpened ? "opened" : "closed"}>
    <NavHeader {...args} />
  </PageFrameNav>
);

export const Opened = Template.bind({});
Opened.args = {
  sideMenuOpened: true,
};

export const Closed = Template.bind({});
Closed.args = {
  sideMenuOpened: false,
};

const PageFrameNav = styled.div`
  &.opened {
    width: 302px;
  }
  &.closed {
    width: 60px;
  }
`;
