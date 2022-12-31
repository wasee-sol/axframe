import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserAvatar from "@core/components/nav/UserAvatar";

export default {
  title: "template/nav/UserAvatar",
  component: UserAvatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UserAvatar>;

const Template: ComponentStory<typeof UserAvatar> = (args) => {
  return <UserAvatar {...args} />;
};

export const Default = Template.bind({
  userName: "thomas",
});
