import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RFIWriteForm } from "react-frame-icon";
import { SearchTool, FilterType } from "../../components/searchTool";

export default {
  title: "template/components/SearchTool",
  component: SearchTool,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SearchTool>;

const Template: ComponentStory<typeof SearchTool> = (args) => <SearchTool {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithFilter = Template.bind({});
WithFilter.args = {
  paramKeyOptions: [
    { value: "title", label: "TITLE" },
    { value: "writer", label: "WRITER" },
  ],
  paramKey: "writer",
  paramValue: "TEST",

  extraParams: [
    {
      title: "행정구역",
      key: "select1",
      icon: <RFIWriteForm />,
      type: FilterType.SELECT,
      options: [
        { value: "중구", label: "중구" },
        { value: "동구", label: "동구" },
        { value: "서구", label: "서구" },
        { value: "남구", label: "남구" },
        { value: "북구", label: "북구" },
      ],
    },
    {
      title: "상담방법",
      key: "select2",
      type: FilterType.SELECT,
      options: [
        { value: "유선", label: "유선" },
        { value: "내방", label: "내방" },
      ],
    },
    {
      title: "상담일자",
      key: "timeRange",
      type: FilterType.TIME_RANGE,
    },
  ],
};
