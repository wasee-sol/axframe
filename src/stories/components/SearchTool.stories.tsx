import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchParams, ParamType } from "../../components/search";

export default {
  title: "template/components/SearchParams",
  component: SearchParams,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SearchParams>;

const Template: ComponentStory<typeof SearchParams> = (args) => <SearchParams {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithFilter = Template.bind({});
WithFilter.args = {
  filterTypeOptions: [
    { value: "title", label: "TITLE" },
    { value: "writer", label: "WRITER" },
  ],
  paramObjects: [
    {
      title: "행정구역",
      name: "select1",
      type: ParamType.SELECT,
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
      name: "select2",
      type: ParamType.SELECT,
      options: [
        { value: "유선", label: "유선" },
        { value: "내방", label: "내방" },
      ],
    },
    {
      title: "상담일자",
      name: "timeRange",
      type: ParamType.TIME_RANGE,
    },
  ],
  paramValues: {
    filterType: "title",
    filter: "sss",
  },
};
