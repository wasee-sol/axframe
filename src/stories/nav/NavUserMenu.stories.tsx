import styled from "@emotion/styled";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavUserMenu from "components/nav/NavUserMenu";
import * as React from "react";

export default {
  title: "template/nav/NavUserMenu",
  component: NavUserMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    menus: [],
  },
} as ComponentMeta<typeof NavUserMenu>;

const Template: ComponentStory<typeof NavUserMenu> = (args) => (
  <PageFrameNav className={args.sideMenuOpened ? "opened" : "closed"}>
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
  sideMenuOpened: true,
  openedMenuUuids: ["consulting", "consulting-2"],
};

export const Closed = Template.bind({});
Closed.args = {
  sideMenuOpened: false,
  openedMenuUuids: ["consulting", "consulting-2"],
};
