import { Form, Select } from "antd";
import * as React from "react";
import { SearchFilterComponent } from "./SearchFilter";

const SearchFilterSelect: SearchFilterComponent = ({ name, title, options }) => {
  return (
    <Form.Item name={name} noStyle>
      <Select onChange={(v) => console.log(v)} placeholder={title} allowClear>
        {options?.map((option, sidx) => (
          <Select.Option key={sidx} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SearchFilterSelect;
