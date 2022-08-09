import styled from "@emotion/styled";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavUserMenu from "@template/nav/NavUserMenu";
import * as React from "react";
import { mock_userMenus } from "../_mock/userMenus";

export default {
  title: "template/nav/NavUserMenu",
  component: NavUserMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    menus: mock_userMenus,
  },
} as ComponentMeta<typeof NavUserMenu>;

const Template: ComponentStory<typeof NavUserMenu> = (args) => (
  <PageFrameNav className={args.opened ? "opened" : "closed"}>
    <NavUserMenu {...args} />
  </PageFrameNav>
);
const PageFrameNav = styled.div`
  &.opened {
    width: 302px;
    padding: 28px;
  }
  &.closed {
    width: 60px;
    padding: 10px 0;
  }
`;

export const Opened = Template.bind({});
Opened.args = {
  opened: true,
  openedUuids: ["consulting", "consulting-2"],
};

export const Closed = Template.bind({});
Closed.args = {
  opened: false,
  openedUuids: ["consulting", "consulting-2"],
};
