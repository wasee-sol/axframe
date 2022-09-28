import * as React from "react";
import styled from "@emotion/styled";
import { Divider, Input, Select, Form } from "antd";
import { RFISearch, RFIRevert } from "react-frame-icon";
import { IconText } from "components/common";
import { SMixinFlexRow } from "../../styles/emotion";
import SearchFilter, { FilterType } from "./SearchFilter";

export interface FilterOption {
  value: string;
  label: React.ReactNode;
}

export interface Filter {
  title: React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  type: FilterType;
  options?: FilterOption[];
}

interface Props {
  filters: Filter[];
  values: Record<string, any>;
  onChangeValues?: (values: Record<string, any>) => void;
  onSearch?: (values: Record<string, any>) => void;
  onReload?: () => void;
}

function SearchTool({ filters, values, onChangeValues, onSearch, onReload }: Props) {
  const [form] = Form.useForm();
  const handleSearch = React.useCallback(() => {
    const values = form.getFieldsValue();
    console.log(values);
    onSearch?.(values);
  }, [form, onSearch]);
  const handleReload = React.useCallback(() => {
    onReload?.();
  }, [onReload]);
  const onValuesChange = React.useCallback(
    (changedValues: any, values: Record<string, any>) => {
      console.log("onValuesChange", values);
      onChangeValues?.(values);
    },
    [onChangeValues]
  );

  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{
        filterType: "title",
      }}
    >
      <Container>
        {filters.length > 0 && (
          <FilterTools>
            {filters.map((filter, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <Divider type={"vertical"} />}
                <SearchFilter
                  title={filter.title}
                  type={filter.type}
                  icon={filter.icon}
                  value={values[filter.key]}
                  options={filter.options}
                />
              </React.Fragment>
            ))}
          </FilterTools>
        )}

        <SearchInput>
          <Input.Group compact>
            <Form.Item name={"filterType"} noStyle>
              <Select>
                <Select.Option value='title'>Title</Select.Option>
                <Select.Option value='writer'>Writer</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name={"filterValue"} noStyle>
              <Input placeholder={"search"} />
            </Form.Item>
          </Input.Group>
        </SearchInput>

        <Buttons>
          <IconText icon={<RFISearch fontSize={18} />} onClick={handleSearch} />
          <IconText icon={<RFIRevert fontSize={18} />} onClick={handleReload} />
        </Buttons>
      </Container>
    </Form>
  );
}

const Container = styled.div`
  ${SMixinFlexRow("stretch", "center")};
  gap: 10px;
  margin-bottom: 15px;
`;

const FilterTools = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
  padding: 0 10px;
  border: 1px solid ${(p) => p.theme.border_color_base};
  height: ${(p) => p.theme.height_base};
  border-radius: ${(p) => p.theme.border_radius_base};
  background: ${(p) => p.theme.component_background};
  flex: none;
`;

const SearchInput = styled.div`
  flex: 1;

  .ant-input-group.ant-input-group-compact {
    ${SMixinFlexRow("stretch", "center")};
  }
`;

const Buttons = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
  flex: none;
`;

export default SearchTool;
