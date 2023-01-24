import styled from "@emotion/styled";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserInfo from "@core/components/nav/UserInfo";
import * as React from "react";
import { PROGRAM_TYPES } from "../../router/menus";

export default {
  title: "template/nav/UserInfo",
  component: UserInfo,
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
