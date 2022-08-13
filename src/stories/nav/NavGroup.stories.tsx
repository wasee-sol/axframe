import styled from "@emotion/styled";
import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavGroup from "@template/nav/NavGroup";
import { mock_userMenus } from "../_mock/userMenus";

export default {
  title: "template/nav/NavGroup",
  component: NavGroup,
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
    menus: mock_userMenus,
    openedMenuUuids: [],
    selectedMenuUuid: "",
  },
} as ComponentMeta<typeof NavGroup>;

const Template: ComponentStory<typeof NavGroup> = (args) => (
  <PageFrameNav sideMenuOpened={args.sideMenuOpened}>
    <NavGroup {...args} />
  </PageFrameNav>
);

const PageFrameNav = styled.div<{ sideMenuOpened?: boolean }>`
  ${({ sideMenuOpened }) => (sideMenuOpened ? "width: 301px;" : "width: 61px;")}
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
