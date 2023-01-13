import { Button, Form } from "antd";
import * as React from "react";
import { ComponentMeta } from "@storybook/react";
import { SearchParams, SearchParamType } from "@core/components/search";
import { useI18n } from "hooks";

export default {
  title: "template/components/SearchParams",
  component: SearchParams,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SearchParams>;

export const Default = () => {
  const [form] = Form.useForm();
  return <SearchParams form={form} />;
};

export const FilterNotStretch = () => {
  const [form] = Form.useForm();
  return <SearchParams form={form} filterWidth={200} />;
};

export const ParamObjects = () => {
  const { t } = useI18n();
  const [form] = Form.useForm();
  return (
    <SearchParams
      form={form}
      params={[
        {
          title: t.formItem.counseling.area.label,
          name: "select1",
          type: SearchParamType.SELECT,
          options: t.formItem.counseling.area.options,
        },
        {
          title: t.formItem.counseling.cnsltHow.label,
          name: "select2",
          type: SearchParamType.SELECT,
          options: t.formItem.counseling.cnsltHow.options,
        },
        {
          title: t.formItem.counseling.cnsltDt.label,
          name: "timeRange",
          type: SearchParamType.TIME_RANGE,
        },
      ]}
    />
  );
};

export const ExtraButtons = () => {
  const { t } = useI18n();
  const [form] = Form.useForm();
  return (
    <SearchParams
      filterWidth={200}
      form={form}
      params={[
        {
          title: t.formItem.counseling.area.label,
          name: "select1",
          type: SearchParamType.SELECT,
          options: t.formItem.counseling.area.options,
        },
        {
          title: t.formItem.counseling.cnsltHow.label,
          name: "select2",
          type: SearchParamType.SELECT,
          options: t.formItem.counseling.cnsltHow.options,
        },
      ]}
      extraButtons={() => (
        <>
          <Button>BTN1</Button>
          <Button>BTN2</Button>
        </>
      )}
    >
      Children
    </SearchParams>
  );
};
