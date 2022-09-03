import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageCounselingRegistration from "@template/pages/PageCounselingRegistration";

export default {
  title: "template/pages/PageCounselingRegistration",
  component: PageCounselingRegistration,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageCounselingRegistration>;

const Template: ComponentStory<typeof PageCounselingRegistration> = (args) => {
  return <PageCounselingRegistration {...args} />;
};

export const Default = Template.bind({});
