import styled from "@emotion/styled";
import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavGroup from "@core/components/nav/NavGroup";
import { MENUS, PROGRAM_TYPES } from "router/menus";

export default {
  title: "template/nav/NavGroup",
  component: NavGroup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    me: {
      userNm: "",
      userCd: "",
      timeZone: 9,
      locale: "en",
      authorityList: ["ROLE_ADMIN", "ROLE_ASP", "ROLE_USER"],
      programList: [
        PROGRAM_TYPES.SAMPLE_REGISTRATION,
        PROGRAM_TYPES.SAMPLE_LIST,
        PROGRAM_TYPES.SAMPLE_LIST_AND_MODAL,
        PROGRAM_TYPES.SAMPLE_LIST_AND_DRAWER,
        PROGRAM_TYPES.SAMPLE_LIST_WITH_LIST,
        PROGRAM_TYPES.SAMPLE_LIST_WITH_FORM,

        PROGRAM_TYPES.DASHBOARD,
        PROGRAM_TYPES.SETTING,
      ],
      email: "jikook71@naver.com",
      compCd: "V100",
    },
    menus: MENUS,
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
