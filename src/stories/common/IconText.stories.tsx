import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconText from "@template/common/IconText";
import { RFIAdd } from "react-frame-icon";

export default {
  title: "template/common/IconText",
  component: IconText,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof IconText>;

const Template: ComponentStory<typeof IconText> = (args) => <IconText {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <RFIAdd />,
  children: "Add Item",
};

export const BlockAndNormal = () => {
  return (
    <div style={{ width: 200 }}>
      <IconText icon={<RFIAdd />} block>
        Add Item
      </IconText>
      <IconText icon={<RFIAdd />} iconSize={"2em"}>
        Add Item
      </IconText>
      <IconText icon={<RFIAdd />} disabled>
        Add Item
      </IconText>
    </div>
  );
};
