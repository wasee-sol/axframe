import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconText } from "components/common";
import { AXFIAdd } from "@axframe/icon";

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
  icon: <AXFIAdd />,
  children: "Add Item",
};

export const BlockAndNormal = () => {
  return (
    <div style={{ width: 200 }}>
      <IconText icon={<AXFIAdd />} block>
        Add Item
      </IconText>
      <IconText icon={<AXFIAdd />} iconSize={"2em"}>
        Add Item
      </IconText>
      <IconText icon={<AXFIAdd />} disabled>
        Add Item
      </IconText>
    </div>
  );
};
