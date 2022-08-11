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
    openedUuids: [],
    selectedUuid: "",
    onSignOut: async () => {
      console.log("onClickSignOut");
    },
  },
} as ComponentMeta<typeof NavGroup>;

const Template: ComponentStory<typeof NavGroup> = (args) => (
  <PageFrameNav className={args.opened ? "opened" : "closed"}>
    <NavGroup {...args} />
  </PageFrameNav>
);

const PageFrameNav = styled.div`
  &.opened {
    width: 300px;
  }
  &.closed {
    width: 60px;
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
